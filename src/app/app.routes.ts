import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'limits/:name',
    loadChildren: () => import('./routes/monthly-limits.routes').then(m => m.monthlyRoutes)
  },
  {
    path: 'add-new-monthly-limit',
    loadComponent: () => import('./pages/add-new-monthly-limit/add-new-monthly-limit.page').then( m => m.AddNewMonthlyLimitPage)
  },
  {
    path: '',
    loadChildren: () => import('./routes/home-routes.module').then(m => m.routes)
  },


];
