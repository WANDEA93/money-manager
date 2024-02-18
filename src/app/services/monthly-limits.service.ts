import { Injectable } from '@angular/core';
import {LimitModel} from "../models/LimitModel";

@Injectable({
  providedIn: 'root'
})
export class MonthlyLimitsService {

  private _monthlyLimits: LimitModel[] = [];
  get monthlyLimits(): LimitModel[] {
    return this._monthlyLimits;
  }

  constructor() {
    this.initLimitModels();
  }

  private initLimitModels(): void {
    this._monthlyLimits = [
      {
        name: 'fuel',
        maxAmount: 30000,
        amount: 5000,
        icon: 'car-sport-outline',
        color: 'primary'
      },
      {
        name: 'bills',
        maxAmount: 20000,
        amount: 2000,
        icon: 'home-outline',
        color: 'danger'
      },
      {
        name: 'liquor',
        maxAmount: 20000,
        amount: 0,
        icon: 'beer-outline',
        color: 'success'
      },
      {
        name: 'pocket',
        maxAmount: 20000,
        amount: 0,
        icon: 'wallet-outline',
        color: 'medium'
      }
    ];
  }
}
