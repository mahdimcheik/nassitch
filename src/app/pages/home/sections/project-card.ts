import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Project } from '../../../core/portfolio';
import { Icon } from '../../../shared/icon/icon';

@Component({
  selector: 'app-project-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, NgOptimizedImage],
  templateUrl: './project-card.html',
  host: { class: 'block' },
})
export class ProjectCard {
  readonly project = input.required<Project>();
}
