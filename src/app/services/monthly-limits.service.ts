import {Injectable} from '@angular/core';
import {MonthlyLimitModel} from "../models/monthly-limit-model";
import {from, Observable, of, take} from "rxjs";
import {MonthlyLimitDetail, MonthlyLimitHeader} from "../models/monthly-limit";
import {ExpenditureEntry} from "../models/expenditure-entry";
import {MockDataProvider} from "../mock-data/mock-data.provider";
import {StorageService} from "./storage.service";
import {Month} from "../enums/month";

@Injectable({
  providedIn: 'root'
})
export class MonthlyLimitsService {

  private readonly DB_KEY_ACTIVE_LIMIT: string = 'DB_KEY_ACTIVE_LIMIT';
  private readonly DB_KEY_LIMIT_HISTORY: string = 'DB_KEY_LIMIT_HISTORY';

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
    },
    {
      name: 'uberEats',
      maxAmount: 20000,
      icon: 'fast-food-outline',
      color: 'medium'
    }
  ];

  private activeMonthlyHeader: MonthlyLimitHeader = MockDataProvider.getActiveModel();
  private previousMonthlyHeaders: Array<MonthlyLimitHeader> = [];

  public getModel(name: string): MonthlyLimitModel | undefined {
    return this._monthlyLimitModels.find(m => m.name === name);
  }

  constructor(private storageService: StorageService) {
    this.getActiveMonthlyLimit().pipe(take(1)).subscribe((limit: MonthlyLimitHeader) => {
      this.activeMonthlyHeader = limit;
      if(!this.activeMonthlyHeader){
        this.createActiveMonthlyLimit(new Date().getMonth());
      }
    });
  }

  public getActiveMonthlyLimit(): Observable<MonthlyLimitHeader> {
    return of(this.activeMonthlyHeader);
  }

  public addEntry(entry: ExpenditureEntry, name: string): void {
    const limitDetail: MonthlyLimitDetail | undefined = this.activeMonthlyHeader.details.find(d => d.name === name);
    if(!limitDetail){
      return;
    }

    limitDetail.amount += entry.amount;
    limitDetail.entries.push(entry);
    this.saveActiveLimit();
  }

  public removeEntry(name: string, id: number): void {
    const limitDetail: MonthlyLimitDetail | undefined = this.activeMonthlyHeader.details.find(d => d.name === name);
    if(!limitDetail){
      return;
    }

    const entryIndex: number = limitDetail.entries.findIndex(e => e.id === id);
    if(entryIndex === -1){
      return;
    }
    const entry: ExpenditureEntry = limitDetail.entries[entryIndex];
    limitDetail.amount -= entry.amount;
    limitDetail.entries.splice(entryIndex, 1);

    this.saveActiveLimit();
  }

  public createActiveMonthlyLimit(month: Month, year?: number): void {
    this.previousMonthlyHeaders.push(this.activeMonthlyHeader);
    this.activeMonthlyHeader = {
      month: month,
      year: year != undefined ? year : new Date().getFullYear(),
      details: this.getDetails()
    }
    this.saveActiveLimit();
  }

  private getDetails(): MonthlyLimitDetail[] {
    return this._monthlyLimitModels.map(model => {
      return {
        name: model.name,
        amount: 0,
        entries: []
      };
    })
  }

  private saveActiveLimit(): void {
    this.storageService.set(this.DB_KEY_ACTIVE_LIMIT, this.activeMonthlyHeader)
  }

  private savePreviousMonthlyLimits(): void {
    this.storageService.set(this.DB_KEY_LIMIT_HISTORY, this.previousMonthlyHeaders);
  }


}
