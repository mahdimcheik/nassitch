import { ChangeDetectionStrategy, Component } from '@angular/core';

/** Puce de statut « ouvert aux opportunités ». Le point clignotant est décoratif ; c'est le libellé qui porte le sens. */
@Component({
  selector: 'app-availability-pill',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span
      class="inline-flex items-center gap-1.5 rounded-full bg-secondary-fixed px-2.5 py-1
             text-label-sm uppercase text-on-secondary-fixed"
    >
      <span class="relative flex size-2" aria-hidden="true">
        <span
          class="absolute inline-flex size-full animate-ping rounded-full bg-secondary opacity-75"
        ></span>
        <span class="relative inline-flex size-2 rounded-full bg-secondary"></span>
      </span>
      Disponible
    </span>
  `,
})
export class AvailabilityPill {}
