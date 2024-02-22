import {Injectable} from '@angular/core';
import {MonthlyLimitDetail, MonthlyLimitHeader} from "../models/monthly-limit";
import {ExpenditureEntry} from "../models/expenditure-entry";
import {Observable, shareReplay, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MonthlyLimitsViewService {

  private _header?: MonthlyLimitHeader;

  private _activeDetail$: Subject<MonthlyLimitDetail> = new Subject<MonthlyLimitDetail>();
  public activeDetail: Observable<MonthlyLimitDetail> = this._activeDetail$.asObservable().pipe(shareReplay(1));

  private _showAddEntry: boolean = false;
  set showAddEntry(value: boolean) {
    this._showAddEntry = value;
  }

  get showAddEntry(): boolean {
    return this._showAddEntry;
  }

  get header(): MonthlyLimitHeader | undefined {
    return this._header;
  }

  set header(h: MonthlyLimitHeader) {
    this._header = h;
  }

  constructor() {
  }
  public setActiveDetails(monthlyLimitDetail: MonthlyLimitDetail): void {
    this._activeDetail$.next(monthlyLimitDetail);
  }

}
