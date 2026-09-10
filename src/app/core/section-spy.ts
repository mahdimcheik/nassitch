import { isPlatformBrowser } from '@angular/common';
import { DestroyRef, Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { NAV_ITEMS } from './portfolio';

/**
 * Suit la section actuellement visible pour que la navigation affiche un état
 * courant fidèle. Ne fait rien côté serveur ni là où IntersectionObserver est
 * indisponible : la navigation s'affiche alors simplement sans surbrillance.
 *
 * La valeur initiale est la première section, car la page s'ouvre en haut : la
 * navigation rend ainsi son état courant côté serveur, sans saut à l'hydratation.
 */
@Injectable({ providedIn: 'root' })
export class SectionSpy {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly destroyRef = inject(DestroyRef);
  private observer?: IntersectionObserver;

  readonly active = signal(NAV_ITEMS[0].fragment);

  watch(ids: readonly string[]): void {
    if (!this.isBrowser || typeof IntersectionObserver === 'undefined') {
      return;
    }

    this.observer?.disconnect();

    const visible = new Map<string, number>();
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }

        let best = '';
        let bestRatio = 0;
        for (const [id, ratio] of visible) {
          if (ratio > bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        }

        if (best) {
          this.active.set(best);
        }
      },
      { rootMargin: '-88px 0px -45% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    for (const id of ids) {
      const element = document.getElementById(id);
      if (element) {
        this.observer.observe(element);
      }
    }

    this.destroyRef.onDestroy(() => this.observer?.disconnect());
  }
}
