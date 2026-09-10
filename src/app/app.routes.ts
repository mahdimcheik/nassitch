import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Nassime Harmach — Ingénieur créatif',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  { path: '**', redirectTo: '' },
];
