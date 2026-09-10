import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PROFILE } from './portfolio';
import { PageMeta, SITE, absoluteUrl } from './site';

/**
 * Pose le titre, la description, le lien canonique et les balises de partage
 * (Open Graph + Twitter Card) d'une page. Appelé pendant le rendu serveur :
 * les robots et les aperçus des réseaux sociaux voient donc le HTML complet,
 * sans avoir à exécuter de JavaScript.
 */
@Injectable({ providedIn: 'root' })
export class Seo {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  apply(page: PageMeta): void {
    const url = absoluteUrl(page.path);
    const image = absoluteUrl(page.image ?? SITE.ogImage);
    const imageAlt = page.imageAlt ?? SITE.ogImageAlt;

    this.title.setTitle(page.title);
    this.meta.updateTag({ name: 'description', content: page.description });

    // Open Graph — Facebook, LinkedIn, WhatsApp, Slack, Discord, Signal…
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: SITE.name });
    this.meta.updateTag({ property: 'og:locale', content: SITE.locale });
    this.meta.updateTag({ property: 'og:title', content: page.title });
    this.meta.updateTag({ property: 'og:description', content: page.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:image:alt', content: imageAlt });
    this.meta.updateTag({ property: 'og:image:type', content: 'image/png' });
    this.meta.updateTag({ property: 'og:image:width', content: String(SITE.ogImageWidth) });
    this.meta.updateTag({ property: 'og:image:height', content: String(SITE.ogImageHeight) });

    // Twitter / X — la grande carte reprend l'image Open Graph.
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: page.title });
    this.meta.updateTag({ name: 'twitter:description', content: page.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
    this.meta.updateTag({ name: 'twitter:image:alt', content: imageAlt });

    this.setCanonical(url);
    this.setStructuredData(page, url, image);
  }

  /** Une seule balise canonique : elle est mise à jour, jamais dupliquée. */
  private setCanonical(url: string): void {
    const head = this.document.head;
    let link = head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  /**
   * Données structurées schema.org : c'est ce qui permet aux moteurs de relier
   * le site à une personne plutôt qu'à une page anonyme.
   */
  private setStructuredData(page: PageMeta, url: string, image: string): void {
    const graph = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Person',
          '@id': `${SITE.origin}/#person`,
          name: PROFILE.name,
          jobTitle: PROFILE.role,
          description: page.description,
          url: SITE.origin,
          image,
          sameAs: [PROFILE.resumeUrl],
        },
        {
          '@type': 'WebSite',
          '@id': `${SITE.origin}/#website`,
          name: SITE.name,
          url: SITE.origin,
          inLanguage: 'fr-FR',
          publisher: { '@id': `${SITE.origin}/#person` },
        },
        {
          '@type': 'WebPage',
          '@id': `${url}#webpage`,
          name: page.title,
          description: page.description,
          url,
          isPartOf: { '@id': `${SITE.origin}/#website` },
          about: { '@id': `${SITE.origin}/#person` },
          primaryImageOfPage: image,
        },
      ],
    };

    const head = this.document.head;
    let script = head.querySelector<HTMLScriptElement>('script#structured-data');

    if (!script) {
      script = this.document.createElement('script');
      script.id = 'structured-data';
      script.type = 'application/ld+json';
      head.appendChild(script);
    }

    script.textContent = JSON.stringify(graph);
  }
}
