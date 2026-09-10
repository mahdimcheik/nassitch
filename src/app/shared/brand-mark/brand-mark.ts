import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Monogram used as the site logo. Decorative: the wordmark next to it names the site. */
@Component({
  selector: 'app-brand-mark',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'inline-flex' },
  template: `
    <span
      class="grid size-9 place-items-center rounded-xl bg-linear-to-br from-primary to-primary-container
             text-label font-extrabold text-on-primary shadow-card"
      aria-hidden="true"
    >
      {{ initials() }}
    </span>
  `,
})
export class BrandMark {
  readonly initials = input.required<string>();
}
