import {Routes} from "@angular/router";

export const monthlyRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages/list-limit-entry/list-limit-entry.page').then(c => c.ListLimitEntryPage)
  }
];
