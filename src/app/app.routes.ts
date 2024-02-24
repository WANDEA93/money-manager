import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'limits/:name',
    loadChildren: () => import('./routes/monthly-limits.routes').then(m => m.monthlyLimitsRoutes)
  },
  {
    path: 'add-new-monthly-limit',
    loadComponent: () => import('./pages/add-new-month/add-new-month.page').then(m => m.AddNewMonthPage)
  },
  {
    path: 'previous-months/:id',
    loadComponent: () => import('./pages/monthly-limits/monthly-limits.page').then((m) => m.MonthlyLimitsPage),
  },
  {
    path: 'bank-accounts',
    loadChildren: () => import('./routes/bank-accounts.routes').then( m => m.bankAccountsRoutes)
  },
  {
    path: '',
    loadChildren: () => import('./routes/home.routes').then(m => m.routes)
  },  {
    path: 'add-ledger-entry',
    loadComponent: () => import('./pages/bank-accounts/add-ledger-entry/add-ledger-entry.page').then( m => m.AddLedgerEntryPage)
  },
  {
    path: 'transfer-amounts',
    loadComponent: () => import('./pages/bank-accounts/transfer-amounts/transfer-amounts.page').then( m => m.TransferAmountsPage)
  },




];
