import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NAV_ITEMS } from '../../core/portfolio';
import { SectionSpy } from '../../core/section-spy';
import { Icon } from '../../shared/icon/icon';

/** Thumb-reach section switcher. Replaced by the header navigation from `md` up. */
@Component({
  selector: 'app-bottom-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  host: { class: 'pointer-events-none fixed inset-x-0 bottom-0 z-50 md:hidden' },
  template: `
    <div
      class="flex justify-center px-4 pb-3"
      style="padding-bottom: calc(env(safe-area-inset-bottom, 0px) + 0.75rem)"
    >
      <nav
        class="pointer-events-auto w-full max-w-md rounded-full bg-surface-container-lowest/90 px-2 py-1.5
               shadow-bar ring-1 ring-outline-variant/40 backdrop-blur-xl"
        aria-label="Sections"
      >
        <ul class="flex items-center justify-around">
          @for (item of navItems; track item.fragment) {
            <li>
              <a
                [href]="'#' + item.fragment"
                [attr.aria-current]="active() === item.fragment ? 'true' : null"
                class="flex min-h-11 min-w-11 flex-col items-center justify-center rounded-full px-3 py-1
                       text-on-surface-variant transition-colors hover:text-on-surface
                       aria-[current]:bg-primary-fixed/60 aria-[current]:text-on-primary-fixed"
              >
                <app-icon [name]="item.icon" class="text-[20px]" />
                <span class="mt-0.5 text-label-sm leading-none">{{ item.label }}</span>
              </a>
            </li>
          }
        </ul>
      </nav>
    </div>
  `,
})
export class BottomNav {
  protected readonly navItems = NAV_ITEMS;
  protected readonly active = inject(SectionSpy).active;
}
