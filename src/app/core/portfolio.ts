import { IconName } from '../shared/icon/icon';

/**
 * Every piece of copy on the home page lives here. Swap these values for your
 * own details — no component needs to change.
 */

export interface Profile {
  readonly name: string;
  readonly handle: string;
  readonly initials: string;
  readonly role: string;
  readonly greeting: string;
  readonly summary: string;
  readonly version: string;
  readonly available: boolean;
  readonly resumeUrl: string;
}

export interface Metric {
  readonly value: string;
  readonly label: string;
  /** Which accent role paints the number. */
  readonly tone: 'primary' | 'secondary' | 'tertiary';
}

export interface Project {
  readonly id: string;
  readonly name: string;
  readonly year: string;
  readonly summary: string;
  readonly tags: readonly string[];
  readonly badge: string;
  readonly status: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly demoUrl: string;
  readonly sourceUrl: string;
}

export interface Obsession {
  readonly label: string;
  readonly icon: IconName;
  readonly tone: 'primary' | 'secondary' | 'tertiary';
}

export interface Commit {
  readonly sha: string;
  readonly message: string;
  readonly meta: string;
}

export interface NavItem {
  readonly label: string;
  readonly icon: IconName;
  readonly fragment: string;
}

export const PROFILE: Profile = {
  name: 'Alex Rivera',
  handle: '@alexdev',
  initials: 'AR',
  role: 'Creative engineer',
  greeting: "Hey, I'm Alex",
  summary:
    'Building delightful web experiences with code & craft. Currently engineering fast, accessible apps and interactive creative tools.',
  version: 'v2.4.0',
  available: true,
  resumeUrl: 'https://github.com',
};

export const METRICS: readonly Metric[] = [
  { value: '4+', label: 'Years experience', tone: 'primary' },
  { value: '32+', label: 'Shipped apps', tone: 'secondary' },
  { value: '99.9%', label: 'Lighthouse', tone: 'tertiary' },
];

export const PROJECTS: readonly Project[] = [
  {
    id: 'saas-pulse',
    name: 'SaaS Pulse',
    year: '2024',
    summary:
      'Zero-bloat product telemetry and subscription analytics tailored specifically for micro-SaaS founders and indie hackers.',
    tags: ['Next.js 14', 'Tailwind CSS', 'Supabase', 'TypeScript'],
    badge: 'Flagship',
    status: 'v1.8.0 live',
    image: '/media/project-saas-pulse.svg',
    imageAlt:
      'SaaS Pulse dashboard: a revenue trend line, three metric cards and a churn breakdown on a light indigo interface.',
    demoUrl: '#',
    sourceUrl: '#',
  },
];

export const OBSESSIONS: readonly Obsession[] = [
  { label: 'Rust + WebAssembly compilers', icon: 'bolt', tone: 'secondary' },
  { label: 'CSS scroll-driven animations', icon: 'sparkles', tone: 'primary' },
  { label: 'Haptic feedback on mobile web', icon: 'smartphone', tone: 'tertiary' },
];

export const COMMITS: readonly Commit[] = [
  {
    sha: '4f8a12',
    message: 'perf: optimize canvas render loop for 120hz displays',
    meta: '2 hours ago on main · saas-pulse',
  },
  {
    sha: '9c3e50',
    message: 'feat: add fluid typography clamps & gesture triggers',
    meta: '5 hours ago on dev · design-tokens',
  },
];

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Featured', icon: 'star', fragment: 'featured-work' },
  { label: 'Projects', icon: 'grid', fragment: 'projects' },
  { label: 'Lab', icon: 'terminal', fragment: 'lab' },
  { label: 'Contact', icon: 'at-sign', fragment: 'contact' },
];
