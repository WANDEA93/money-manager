import {Routes} from "@angular/router";

export const loanRoutes: Routes = [
  {
    path: 'add',
    loadComponent: () => import('../pages/loan/add-loan/add-loan.page').then(m => m.AddLoanPage)
  }
];
