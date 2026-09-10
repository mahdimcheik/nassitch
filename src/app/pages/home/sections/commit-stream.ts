import { ChangeDetectionStrategy, Component } from '@angular/core';
import { COMMITS } from '../../../core/portfolio';
import { Icon } from '../../../shared/icon/icon';

@Component({
  selector: 'app-commit-stream',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  host: { class: 'block' },
  template: `
    <section
      class="flex flex-col gap-3 rounded-2xl bg-surface-container-lowest p-4 shadow-card sm:p-5"
      aria-labelledby="commits-title"
    >
      <div class="flex items-center justify-between gap-3">
        <h2
          id="commits-title"
          class="flex items-center gap-2 text-label uppercase text-on-surface-variant"
        >
          <app-icon name="commit" class="text-[18px] text-secondary" />
          Commits en direct
        </h2>
        <span
          class="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-label-sm uppercase text-secondary"
        >
          <span class="size-1.5 rounded-full bg-secondary" aria-hidden="true"></span>
          Actif aujourd’hui
        </span>
      </div>

      <ol class="flex flex-col gap-2">
        @for (commit of commits; track commit.sha) {
          <li class="flex items-start gap-3 rounded-xl bg-surface-container-low/70 p-2.5">
            <span class="font-mono text-code font-bold text-primary">{{ commit.sha }}</span>
            <span class="flex min-w-0 flex-1 flex-col">
              <span class="truncate text-body-sm text-on-surface">{{ commit.message }}</span>
              <span class="text-label-sm text-on-surface-variant">{{ commit.meta }}</span>
            </span>
          </li>
        }
      </ol>
    </section>
  `,
})
export class CommitStream {
  protected readonly commits = COMMITS;
}
