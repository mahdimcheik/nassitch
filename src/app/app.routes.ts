import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Alex Rivera — Creative engineer',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  { path: '**', redirectTo: '' },
];
