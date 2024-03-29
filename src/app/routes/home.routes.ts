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
        path: 'bank-accounts',
        loadComponent: () =>
          import('../pages/bank-accounts/bank-accounts-page.component').then((m) => m.BankAccountsPage),
      },
      {
        path: 'exceptions',
        loadComponent: () =>
          import('../pages/exceptions/exceptions.page').then((m) => m.ExceptionsPage),
      },
      {
        path: 'loans',
        loadComponent: () =>
          import('../pages/loan/loan.page').then((m) => m.LoanPage),
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
