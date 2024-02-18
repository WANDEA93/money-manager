export interface ExpenditureEntry {
  id: number;
  amount: number;
  date: Date;
  vendor?: string;
  comment?: string;
}
