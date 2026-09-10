import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../../shared/icon/icon';

@Component({
  selector: 'app-availability-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  host: { class: 'block' },
  template: `
    <section
      id="contact"
      class="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-primary p-4
             text-on-primary shadow-card sm:p-5"
      aria-labelledby="availability-title"
    >
      <div
        class="pointer-events-none absolute -bottom-12 -right-10 size-40 rounded-full bg-secondary-container/25 blur-2xl"
        aria-hidden="true"
      ></div>

      <div class="relative flex flex-col items-start gap-1.5">
        <span
          class="inline-flex items-center gap-1.5 rounded-full bg-on-primary/20 px-2.5 py-1 text-label-sm uppercase"
        >
          <span
            class="size-2 animate-ping rounded-full bg-secondary-fixed"
            aria-hidden="true"
          ></span>
          Q3 / Q4 availability
        </span>
        <h3 id="availability-title" class="mt-1 text-title font-bold">
          Open to senior roles &amp; select freelance
        </h3>
        <p class="text-body-sm text-on-primary/80">
          Looking for full-time frontend architecture or zero-to-one design engineering contracts.
        </p>
      </div>

      <div class="relative mt-4">
        <a
          href="mailto:hello@example.com"
          class="inline-flex min-h-11 items-center gap-2 rounded-xl bg-surface-container-lowest px-4
                 text-label font-bold text-primary shadow-card transition-transform active:scale-[0.98]"
        >
          <app-icon name="calendar" class="text-[16px]" />
          Book an intro chat (15 min)
        </a>
      </div>
    </section>
  `,
})
export class AvailabilityCard {}
