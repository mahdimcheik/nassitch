import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/**
 * One inline-SVG icon family for the whole site — no icon font, no emoji, no
 * network request. Icons are sized in `em` so a `text-[18px]` on the host is
 * all a caller needs.
 *
 * Icons are always decorative: they are hidden from assistive tech, and the
 * control or text around them carries the accessible name.
 */
type IconShape = {
  readonly d: readonly string[];
  readonly filled?: boolean;
  readonly viewBox?: string;
};

const SHAPES = {
  'arrow-right': { d: ['M5 12h14', 'm13 5 7 7-7 7'] },
  'arrow-up-right': { d: ['M7 17 17 7', 'M8 7h9v9'] },
  'chevron-right': { d: ['m9 6 6 6-6 6'] },
  code: { d: ['m9 6-6 6 6 6', 'm15 6 6 6-6 6'] },
  folder: {
    d: ['M4 20h16a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-7.5l-2-2.5H4a1 1 0 0 0-1 1v12.5a1 1 0 0 0 1 1z'],
  },
  grid: { d: ['M4 4h7v7H4z', 'M13 4h7v7h-7z', 'M4 13h7v7H4z', 'M13 13h7v7h-7z'] },
  dashboard: { d: ['M4 4h7v6H4z', 'M13 4h7v10h-7z', 'M4 13h7v7H4z', 'M13 17h7v3h-7z'] },
  bolt: { d: ['M13 2 4 14h7l-1 8 9-12h-7z'] },
  sparkles: {
    d: [
      'm12 3 1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9z',
      'M18.8 16.2l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z',
    ],
  },
  lightbulb: {
    d: [
      'M9.5 18h5',
      'M10.5 21h3',
      'M12 3a6 6 0 0 0-3.6 10.8c.5.4.9 1.1 1 1.7h5.2c.1-.6.5-1.3 1-1.7A6 6 0 0 0 12 3z',
    ],
  },
  smartphone: {
    d: ['M7 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z', 'M10.5 18.5h3'],
  },
  commit: { d: ['M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0', 'M3 12h6', 'M15 12h6'] },
  calendar: {
    d: [
      'M7 3v4',
      'M17 3v4',
      'M4 9.5h16',
      'M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z',
    ],
  },
  play: { d: ['m7.5 4.5 12 7.5-12 7.5z'] },
  star: { d: ['m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.2-5.4-2.9-5.4 2.9 1-6.2L3.2 9.5l6.1-.9z'] },
  terminal: { d: ['m5 8 4 4-4 4', 'M13 16h6'] },
  'at-sign': {
    d: ['M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0', 'M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8'],
  },
  user: { d: ['M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8', 'M5 20a7 7 0 0 1 14 0'] },
  github: {
    filled: true,
    viewBox: '0 0 24 24',
    d: [
      'M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z',
    ],
  },
} as const satisfies Record<string, IconShape>;

export type IconName = keyof typeof SHAPES;

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'inline-flex shrink-0 items-center justify-center' },
  template: `
    <svg
      [attr.viewBox]="shape().viewBox ?? '0 0 24 24'"
      [attr.fill]="shape().filled ? 'currentColor' : 'none'"
      [attr.stroke]="shape().filled ? 'none' : 'currentColor'"
      class="h-[1em] w-[1em]"
      stroke-width="1.75"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      @for (d of shape().d; track d) {
        <path [attr.d]="d" />
      }
    </svg>
  `,
})
export class Icon {
  readonly name = input.required<IconName>();
  protected readonly shape = computed<IconShape>(() => SHAPES[this.name()]);
}
