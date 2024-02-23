import {Routes} from "@angular/router";

export const bankAccountsRoutes: Routes = [
  {
    path: ':category',
    loadComponent: () => import('../pages/bank-accounts/list-ledger-entry/list-ledger-entry.page').then(page => page.ListLedgerEntryPage)
  },

];
