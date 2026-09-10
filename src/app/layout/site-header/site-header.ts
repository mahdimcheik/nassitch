import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SectionSpy } from '../../core/section-spy';
import { NAV_ITEMS, PROFILE } from '../../core/portfolio';
import { AvailabilityPill } from '../../shared/availability-pill/availability-pill';
import { BrandMark } from '../../shared/brand-mark/brand-mark';

@Component({
  selector: 'app-site-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BrandMark, AvailabilityPill],
  templateUrl: './site-header.html',
  host: {
    // L'hôte du composant est le repère « banner » de la page.
    role: 'banner',
    class:
      'fixed inset-x-0 top-0 z-50 border-b border-outline-variant/40 bg-surface/85 backdrop-blur-xl',
  },
})
export class SiteHeader {
  private readonly spy = inject(SectionSpy);

  protected readonly profile = PROFILE;
  protected readonly navItems = NAV_ITEMS;
  protected readonly active = this.spy.active;
}
