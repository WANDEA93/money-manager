import {Routes} from "@angular/router";

export const bankAccountsRoutes: Routes = [
  {
    path: 'view/:category',
    loadComponent: () => import('../pages/bank-accounts/list-ledger-entry/list-ledger-entry.page').then(page => page.ListLedgerEntryPage)
  },
  {
    path: 'add',
    loadComponent: () => import('../pages/bank-accounts/add-ledger-entry/add-ledger-entry.page').then(p => p.AddLedgerEntryPage)

  }

];
