import { Routes } from '@angular/router';
import { NotFoundComponent } from './misc/not-found/not-found.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'setup',
        loadChildren: () =>
          import('./setup/setup.module').then((mod) => mod.SetupModule),
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((mod) => mod.AuthModule),
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'not-found',
    // redirectTo: '/pages/miscellaneous/error' //Error 404 - Page not found
  },
];
