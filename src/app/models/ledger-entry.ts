export interface LedgerEntry {
  id: string;
  type: LedgerType;
  amount: number;
  balance: number;
  date: Date;
  description?: string;
}

export enum LedgerType {
  CREDIT, DEBIT
}
