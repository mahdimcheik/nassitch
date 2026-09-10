/**
 * Constantes de déploiement et métadonnées de partage. Séparées du contenu
 * rédactionnel : ces valeurs dépendent du domaine sur lequel le site est servi.
 */
export const SITE = {
  /** Origine publique, sans barre oblique finale. Sert aux URL absolues (og:url, canonique, sitemap). */
  origin: 'https://nassith.site',
  name: 'Nassime Harmach',
  locale: 'fr_FR',
  /** Carte de partage 1200 × 630 — le format attendu par les grands réseaux. */
  ogImage: '/media/og-card.png',
  ogImageAlt:
    "Carte de partage : le monogramme indigo NH, le nom Nassime Harmach, la mention « Ingénieur créatif » et l'adresse nassith.site.",
  ogImageWidth: 1200,
  ogImageHeight: 630,
} as const;

/** Métadonnées d'une page, appliquées par le service `Seo`. */
export interface PageMeta {
  readonly title: string;
  /** 150–160 caractères : au-delà, les moteurs tronquent. */
  readonly description: string;
  /** Chemin absolu depuis la racine, barre oblique initiale comprise. */
  readonly path: string;
  readonly image?: string;
  readonly imageAlt?: string;
}

export const HOME_META: PageMeta = {
  title: 'Nassime Harmach — Ingénieur créatif',
  description:
    'Portfolio de Nassime Harmach, ingénieur créatif : applications web rapides et accessibles, interfaces soignées et outils créatifs interactifs.',
  path: '/',
};

/** Transforme un chemin racine en URL absolue sur l'origine publique. */
export function absoluteUrl(path: string): string {
  return new URL(path, SITE.origin).toString();
}
