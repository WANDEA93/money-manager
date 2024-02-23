import {Routes} from "@angular/router";

import {HomePage} from "../pages/home/home.page";
import {ActiveLimitResolver} from "../resolvers/active-limit.resolver";
import {LimitsHistoryResolver} from "../resolvers/limits-history.resolver";

export const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'monthly-limits',
        loadComponent: () => import('../pages/monthly-limits/monthly-limits.page').then((m) => m.MonthlyLimitsPage),
        resolve: [ActiveLimitResolver]
      },
      {
        path: 'history',
        loadComponent: () => import('../pages/monthly-limit-history/monthly-limit-history.page').then((m) => m.MonthlyLimitHistoryPage),
        resolve: [LimitsHistoryResolver]
      },
      {
        path: 'savings',
        loadComponent: () =>
          import('../pages/savings/savings.page').then((m) => m.SavingsPage),
      },
      {
        path: 'exceptions',
        loadComponent: () =>
          import('../pages/exceptions/exceptions.page').then((m) => m.ExceptionsPage),
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
