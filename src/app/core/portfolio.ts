import { IconName } from '../shared/icon/icon';

/**
 * Tout le contenu rédactionnel de la page d'accueil vit ici. Remplacez ces
 * valeurs par les vôtres — aucun composant n'a besoin d'être modifié.
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
  /** Le rôle d'accent qui colore le chiffre. */
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
  name: 'Nassime Harmach',
  handle: '@nassitch',
  initials: 'NH',
  role: 'Ingénieur créatif',
  greeting: "Salut, moi c'est Nassime",
  summary:
    'Je conçois des expériences web soignées, entre code et artisanat. En ce moment : des applications rapides et accessibles, et des outils créatifs interactifs.',
  version: 'v2.4.0',
  available: true,
  resumeUrl: 'https://github.com/nassitch',
};

export const METRICS: readonly Metric[] = [
  { value: '4+', label: "Ans d'expérience", tone: 'primary' },
  { value: '32+', label: 'Applis livrées', tone: 'secondary' },
  { value: '99.9%', label: 'Lighthouse', tone: 'tertiary' },
];

export const PROJECTS: readonly Project[] = [
  {
    id: 'saas-pulse',
    name: 'SaaS Pulse',
    year: '2024',
    summary:
      "Télémétrie produit et analyse d'abonnements sans superflu, pensées pour les fondateurs de micro-SaaS et les indie hackers.",
    tags: ['Next.js 14', 'Tailwind CSS', 'Supabase', 'TypeScript'],
    badge: 'Produit phare',
    status: 'v1.8.0 en ligne',
    image: '/media/project-saas-pulse.svg',
    imageAlt:
      "Tableau de bord SaaS Pulse : une courbe de revenus, trois cartes de métriques et une répartition du taux d'attrition sur une interface indigo clair.",
    demoUrl: '#',
    sourceUrl: '#',
  },
];

export const OBSESSIONS: readonly Obsession[] = [
  { label: 'Compilateurs Rust + WebAssembly', icon: 'bolt', tone: 'secondary' },
  { label: 'Animations CSS pilotées au défilement', icon: 'sparkles', tone: 'primary' },
  { label: 'Retour haptique sur le web mobile', icon: 'smartphone', tone: 'tertiary' },
];

// Les sujets de commit restent en anglais : ce sont les messages Git réels du dépôt.
export const COMMITS: readonly Commit[] = [
  {
    sha: '4f8a12',
    message: 'perf: optimize canvas render loop for 120hz displays',
    meta: 'il y a 2 heures sur main · saas-pulse',
  },
  {
    sha: '9c3e50',
    message: 'feat: add fluid typography clamps & gesture triggers',
    meta: 'il y a 5 heures sur dev · design-tokens',
  },
];

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'À la une', icon: 'star', fragment: 'featured-work' },
  { label: 'Projets', icon: 'grid', fragment: 'projects' },
  { label: 'Labo', icon: 'terminal', fragment: 'lab' },
  { label: 'Contact', icon: 'at-sign', fragment: 'contact' },
];
