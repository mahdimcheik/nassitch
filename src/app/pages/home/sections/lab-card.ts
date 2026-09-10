import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Icon } from '../../../shared/icon/icon';

/**
 * Playground card. The waves are two static paths drifting on `transform`
 * (compositor-only, and stopped by the global reduced-motion rule) rather than
 * per-frame path morphing.
 */
@Component({
  selector: 'app-lab-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  templateUrl: './lab-card.html',
  host: { class: 'block' },
})
export class LabCard {
  protected readonly boosted = signal(false);

  protected readonly wave = {
    back: 'M0 60 Q37.5 22 75 60 T150 60 T225 60 T300 60 T375 60 T450 60 T525 60 T600 60 L600 120 L0 120 Z',
    front:
      'M0 78 Q37.5 108 75 78 T150 78 T225 78 T300 78 T375 78 T450 78 T525 78 T600 78 L600 120 L0 120 Z',
  };

  protected toggleBoost(): void {
    this.boosted.update((value) => !value);
  }
}
