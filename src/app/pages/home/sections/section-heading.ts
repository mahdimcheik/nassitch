import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon, IconName } from '../../../shared/icon/icon';

/** Petite ligne de titre partagée par les sections du bento : icône + titre + méta à droite. */
@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  host: { class: 'block' },
  template: `
    <div class="flex items-center justify-between gap-3 pt-1">
      <h2 class="flex items-center gap-2 text-title text-on-surface">
        <app-icon [name]="icon()" class="text-[20px] text-primary" />
        {{ title() }}
      </h2>
      @if (meta(); as metaText) {
        <span class="font-mono text-label-sm uppercase text-on-surface-variant">{{
          metaText
        }}</span>
      }
    </div>
  `,
})
export class SectionHeading {
  readonly icon = input.required<IconName>();
  readonly title = input.required<string>();
  readonly meta = input<string>();
}
