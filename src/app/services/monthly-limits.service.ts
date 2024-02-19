import { Injectable } from '@angular/core';
import {MonthlyLimitModel} from "../models/monthly-limit-model";
import {Observable, of} from "rxjs";
import {MonthlyLimitHeader} from "../models/monthly-limit";
import {ExpenditureEntry} from "../models/expenditure-entry";
import {MockDataProvider} from "../mock-data/mock-data.provider";

@Injectable({
  providedIn: 'root'
})
export class MonthlyLimitsService {

  private _monthlyLimitModels: MonthlyLimitModel[] = [
    {
      name: 'fuel',
      maxAmount: 30000,
      icon: 'car-sport-outline',
      color: 'primary'
    },
    {
      name: 'bills',
      maxAmount: 20000,
      icon: 'home-outline',
      color: 'danger'
    },
    {
      name: 'liquor',
      maxAmount: 20000,
      icon: 'beer-outline',
      color: 'success'
    },
    {
      name: 'pocket',
      maxAmount: 20000,
      icon: 'wallet-outline',
      color: 'medium'
    }
  ];

  private dummyActiveMonthlyHeader: MonthlyLimitHeader = MockDataProvider.getActiveModel();

  public getModel(name: string): MonthlyLimitModel | undefined {
    return this._monthlyLimitModels.find(m => m.name === name);
  }

  constructor() {
  }

  public getActiveMonthlyLimit(): Observable<MonthlyLimitHeader> {
     return of(this.dummyActiveMonthlyHeader);
  }

  public addEntry(entry: ExpenditureEntry, name: string): void {

  }




}
