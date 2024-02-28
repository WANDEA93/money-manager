import {Injectable} from '@angular/core';
import {StorageService} from "../services/storage.service";
import {Loan} from "../models/loan.model";
import {v4 as uuidv4} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private static readonly DB_KEY_LOAN = 'DB_KEY_LOAN';

  private activeLoans: Loan[] = [];

  constructor(private storage: StorageService) {
    this.storage.get(LoanService.DB_KEY_LOAN)?.then((loans) => this.activeLoans = loans || []);
  }

  public getActiveLoans(): Loan[] {
    return this.activeLoans;
  }

  public createLoan(loan: Partial<Loan>): void {
    loan.id = uuidv4();
    loan.date = new Date();
    loan.received = 0;
    this.activeLoans.push(loan as Loan);
    this.saveLoans();
  }

  public settleLoan(id: string, amount: number): void {
    const index: number = this.activeLoans.findIndex(l => l.id === id);
    if(index === -1){
      return;
    }

    const loan = this.activeLoans[index];
    loan.received += amount;

    if(loan.received === loan.amount){
      this.activeLoans.splice(index, 1);
    }

    this.saveLoans();
  }

  private saveLoans(): void {
    this.storage.set(LoanService.DB_KEY_LOAN, this.activeLoans);
  }
}
