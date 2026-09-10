import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE } from '../../../core/portfolio';
import { Icon } from '../../../shared/icon/icon';

@Component({
  selector: 'app-hero-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  templateUrl: './hero-card.html',
  host: { class: 'block' },
})
export class HeroCard {
  protected readonly profile = PROFILE;
}
