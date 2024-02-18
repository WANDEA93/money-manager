import {ExpenditureEntry} from "./expenditure-entry";

export interface MonthlyLimitHeader {
  year: number;
  month: number; // 0 - 11
  details: MonthlyLimitDetail[];
}

export interface MonthlyLimitDetail {
  name: string;
  amount: number;
  entries: ExpenditureEntry[];
}
