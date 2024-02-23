import {Routes} from "@angular/router";

export const monthlyLimitsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages/list-limit-entry/list-limit-entry.page').then(c => c.ListLimitEntryPage)
  },
  {
    path: 'add',
    loadComponent: () => import('../pages/add-limit-entry/add-limit-entry.page').then(c => c.AddLimitEntryPage)
  }
];
