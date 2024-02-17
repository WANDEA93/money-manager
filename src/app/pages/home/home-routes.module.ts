import {Routes} from "@angular/router";

import {HomePage} from "./home.page";

export const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'monthly-limits',
        loadComponent: () =>
          import('../monthly-limits/monthly-limits.page').then((m) => m.MonthlyLimitsPage),
      },
      {
        path: 'savings',
        loadComponent: () =>
          import('../savings/savings.page').then((m) => m.SavingsPage),
      },
      {
        path: 'exceptions',
        loadComponent: () =>
          import('../exceptions/exceptions.page').then((m) => m.ExceptionsPage),
      },
      {
        path: '',
        redirectTo: '/home/monthly-limits',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home/monthly-limits',
    pathMatch: 'full',
  },
];
