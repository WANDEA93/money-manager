import { Injectable } from '@angular/core';
import {MonthlyLimitDetail, MonthlyLimitHeader} from "../models/monthly-limit";

@Injectable({
  providedIn: 'root'
})
export class LimitEntryViewService {

  private _monthlyLimitToShow?: MonthlyLimitDetail = undefined;
  private _monthlyLimitHeaderToShow?: MonthlyLimitHeader = undefined;
  constructor() { }

  public setMonthlyLimit(limit: MonthlyLimitDetail): void {
    this._monthlyLimitToShow = limit;
  }

  public getMonthlyLimit(): MonthlyLimitDetail | undefined {
    return this._monthlyLimitToShow;
  }

  public setMonthlyLimitHeader(header: MonthlyLimitHeader): void {
    this._monthlyLimitHeaderToShow = header;
  }

  public getMonthlyLimitHeader(): MonthlyLimitHeader | undefined {
    return this._monthlyLimitHeaderToShow;
  }
}
