import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Monogramme servant de logo. Décoratif : c'est le nom à côté qui identifie le site. */
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
