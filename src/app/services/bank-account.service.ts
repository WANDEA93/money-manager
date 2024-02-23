import {Injectable} from '@angular/core';
import {StorageService} from "./storage.service";
import {LedgerEntry, LedgerType} from "../models/ledger-entry";
import {v4 as uuidv4} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  private static readonly DB_KEY_SAVINGS_ACC_ENTRIES = 'DB_KEY_SAVINGS_ACC_ENTRIES';
  private static readonly DB_KEY_CHECKING_ACC_ENTRIES = 'DB_KEY_CHECKING_ACC_ENTRIES';

  private savingsAccEntries: LedgerEntry[] = [];
  private checkingAccEntries: LedgerEntry[] = [];

  private _savingsAccountBalance: number = 0;
  get savingsAccountBalance() {
    return this._savingsAccountBalance;
  }
  private _checkingAccountBalance: number = 0;
  get checkingAccountBalance(){
    return this._checkingAccountBalance;
  }

  private ledgerEntryTarget: LedgerEntryAccountType = 'savings';

  constructor(private storage: StorageService) {
    this.storage.get(BankAccountService.DB_KEY_SAVINGS_ACC_ENTRIES)?.then((entries) => {
      this.savingsAccEntries = entries;
      this._savingsAccountBalance = this.calculateBalance(this.savingsAccEntries);
    });
    this.storage.get(BankAccountService.DB_KEY_CHECKING_ACC_ENTRIES)?.then((entries) => {
      this.checkingAccEntries = entries;
      this._checkingAccountBalance = this.calculateBalance(this.checkingAccEntries);
    });
  }

  public getSavingsAccountEntries(): LedgerEntry[] {
    return this.savingsAccEntries;
  }

  public getCheckingAccountEntries(): LedgerEntry[] {
    return this.checkingAccEntries;
  }

  public setEntryTarget(target: LedgerEntryAccountType): void {
    this.ledgerEntryTarget = target;
  }

  public getEntryTarget(): LedgerEntryAccountType {
    return this.ledgerEntryTarget;
  }

  public addLedgerEntry(entry: Partial<LedgerEntry>): void {
    entry.id = uuidv4();
    entry.date = new Date();

    if (this.ledgerEntryTarget === 'savings') {
      entry.balance = entry.type === LedgerType.CREDIT ? this._savingsAccountBalance + entry.amount! : this._savingsAccountBalance - entry.amount!;
      this.savingsAccEntries.push(entry as LedgerEntry);
      this.saveSavingAccountEntries();
    } else {
      entry.balance = entry.type === LedgerType.CREDIT ? this._checkingAccountBalance + entry.amount! : this._checkingAccountBalance - entry.amount!;
      this.checkingAccEntries.push(entry as LedgerEntry);
      this.saveCheckingAccountEntries();
    }
  }

  public saveSavingAccountEntries(): void {
    this.storage.set(BankAccountService.DB_KEY_SAVINGS_ACC_ENTRIES, this.savingsAccEntries);
  }

  public saveCheckingAccountEntries(): void {
    this.storage.set(BankAccountService.DB_KEY_SAVINGS_ACC_ENTRIES, this.savingsAccEntries);
  }

  private calculateBalance(entries: LedgerEntry[]): number {
    const total: number = entries.reduce((total, entry) => {
      if (entry.type === LedgerType.CREDIT) {
        return total + entry.amount;
      } else {
        return total - entry.amount;
      }
    }, 0);
    return total;
  }
}

export type LedgerEntryAccountType = 'savings' | 'checking';
