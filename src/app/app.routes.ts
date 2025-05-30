import { authGuard } from './guards/auth.guard';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () => import('./components/home/home.component'),
  },

  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component'),
  },
  {
    path: 'register',
    loadComponent: () => import('./components/register/register.component'),
  },
  {
    path: 'users',
    loadComponent: () => import('./components/users/users.component').then(m => m.UsersComponent),
  },

  {
    path: 'movies',
    loadComponent: () =>
      import('./components/upcoming-movies/upcoming-movies.component'),
    canActivate: [authGuard],
  },


  {
    path: 'movies/:id',
    loadComponent: () =>
      import('./components/movies-details/movies-details.component'),
    canActivate: [authGuard],
  },

  {
    path: 'reservations',
    loadComponent: () =>
      import('./components/reservation-list/reservation-list.component'),
    canActivate: [authGuard],
  },

  {
    path: '404',
    title: 'page non trouvée',
    loadComponent: () =>
      import('./components/page-not-found/page-not-found.component'),
  },
  {
    path: '**',
    redirectTo: '404',
  },
];
