import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'limits/:name',
    loadChildren: () => import('./routes/monthly-limits.routes').then(m => m.monthlyRoutes)
  },
  {
    path: '',
    loadChildren: () => import('./routes/home-routes.module').then(m => m.routes)
  }

];
