import { ChangeDetectionStrategy, Component, afterNextRender, inject } from '@angular/core';
import { NAV_ITEMS, PROJECTS } from '../../core/portfolio';
import { SectionSpy } from '../../core/section-spy';
import { AvailabilityCard } from './sections/availability-card';
import { CommitStream } from './sections/commit-stream';
import { HeroCard } from './sections/hero-card';
import { LabCard } from './sections/lab-card';
import { MetricsStrip } from './sections/metrics-strip';
import { ObsessionsCard } from './sections/obsessions-card';
import { ProjectCard } from './sections/project-card';
import { SectionHeading } from './sections/section-heading';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AvailabilityCard,
    CommitStream,
    HeroCard,
    LabCard,
    MetricsStrip,
    ObsessionsCard,
    ProjectCard,
    SectionHeading,
  ],
  templateUrl: './home.html',
  host: { class: 'block' },
})
export class Home {
  private readonly spy = inject(SectionSpy);

  protected readonly projects = PROJECTS;

  constructor() {
    afterNextRender(() => this.spy.watch(NAV_ITEMS.map((item) => item.fragment)));
  }
}
