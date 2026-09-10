import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OBSESSIONS } from '../../../core/portfolio';
import { Icon } from '../../../shared/icon/icon';

@Component({
  selector: 'app-obsessions-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  host: { class: 'block' },
  template: `
    <section
      class="flex h-full flex-col gap-3 rounded-2xl bg-surface-container-low p-4 shadow-card sm:p-5"
      aria-labelledby="obsessions-title"
    >
      <h3 id="obsessions-title" class="flex items-center gap-2 text-label uppercase text-primary">
        <app-icon name="lightbulb" class="text-[18px]" />
        Current obsessions
      </h3>
      <ul class="flex flex-col gap-2">
        @for (item of obsessions; track item.label) {
          <li
            class="flex items-center gap-2.5 rounded-xl bg-surface-container-lowest p-2.5 shadow-card"
          >
            <app-icon
              [name]="item.icon"
              class="text-[18px]"
              [class.text-primary]="item.tone === 'primary'"
              [class.text-secondary]="item.tone === 'secondary'"
              [class.text-tertiary]="item.tone === 'tertiary'"
            />
            <span class="text-body-sm font-medium text-on-surface">{{ item.label }}</span>
          </li>
        }
      </ul>
    </section>
  `,
})
export class ObsessionsCard {
  protected readonly obsessions = OBSESSIONS;
}
