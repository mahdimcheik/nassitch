import { ChangeDetectionStrategy, Component } from '@angular/core';

/** "Open for work" status chip. The pulsing dot is decorative; the label carries the meaning. */
@Component({
  selector: 'app-availability-pill',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'inline-flex' },
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
      Available
    </span>
  `,
})
export class AvailabilityPill {}
