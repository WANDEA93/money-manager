import {ExpenditureEntry} from "./expenditure-entry";

export interface MonthlyLimitModel {
  name: string;
  label?: string;
  icon?: string;
  color?: string;
  maxAmount: number;
}


