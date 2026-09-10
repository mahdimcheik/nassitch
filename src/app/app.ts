import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BottomNav } from './layout/bottom-nav/bottom-nav';
import { SiteHeader } from './layout/site-header/site-header';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, SiteHeader, BottomNav],
  templateUrl: './app.html',
})
export class App {}
