import { ChangeDetectionStrategy, Component } from '@angular/core';
import { METRICS } from '../../../core/portfolio';

@Component({
  selector: 'app-metrics-strip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <ul class="grid h-full grid-cols-3 gap-2 sm:gap-4 lg:grid-cols-1">
      @for (metric of metrics; track metric.label) {
        <li
          class="flex flex-col items-center justify-center rounded-2xl bg-surface-container-lowest p-3
                 text-center shadow-card sm:p-5 lg:flex-row lg:justify-between lg:px-6 lg:text-left"
        >
          <span
            class="text-headline-sm font-bold sm:text-headline"
            [class.text-primary]="metric.tone === 'primary'"
            [class.text-secondary]="metric.tone === 'secondary'"
            [class.text-tertiary]="metric.tone === 'tertiary'"
          >
            {{ metric.value }}
          </span>
          <span class="mt-0.5 text-label-sm leading-tight text-on-surface-variant lg:mt-0">{{
            metric.label
          }}</span>
        </li>
      }
    </ul>
  `,
})
export class MetricsStrip {
  protected readonly metrics = METRICS;
}
