import { Routes } from '@angular/router';
import { HOME_META } from './core/site';

export const routes: Routes = [
  {
    path: '',
    title: HOME_META.title,
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  { path: '**', redirectTo: '' },
];
