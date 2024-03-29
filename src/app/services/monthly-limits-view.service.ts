import {Injectable} from '@angular/core';
import {MonthlyLimitDetail, MonthlyLimitHeader} from "../models/monthly-limit";
import {BehaviorSubject, delay, Observable, publish, ReplaySubject, share, shareReplay, Subject} from "rxjs";
import {MonthlyLimitsService} from "./monthly-limits.service";

@Injectable({
  providedIn: 'root'
})
export class MonthlyLimitsViewService {

  private _selectedHeader$: ReplaySubject<MonthlyLimitHeader> = new ReplaySubject<MonthlyLimitHeader>();
  public selectedHeader: Observable<MonthlyLimitHeader> = this._selectedHeader$.asObservable().pipe();

  private _selectedDetail$: ReplaySubject<MonthlyLimitDetail> = new ReplaySubject<MonthlyLimitDetail>();
  public selectedDetail: Observable<MonthlyLimitDetail> = this._selectedDetail$.asObservable().pipe(shareReplay(1));

  private _selectedPreviousHeaders$: ReplaySubject<MonthlyLimitHeader[]> = new ReplaySubject<MonthlyLimitHeader[]>();
  public selectedPreviousHeaders: Observable<MonthlyLimitHeader[]> = this._selectedPreviousHeaders$.asObservable().pipe(shareReplay(1));

  private _showAddEntry: boolean = false;
  set showAddEntry(value: boolean) {
    this._showAddEntry = value;
  }

  get showAddEntry(): boolean {
    return this._showAddEntry;
  }

  constructor(private monthlyLimitService: MonthlyLimitsService) {
  }

  public setActiveDetails(monthlyLimitDetail: MonthlyLimitDetail): void {
    this._selectedDetail$.next(monthlyLimitDetail);
  }

  public selectActiveHeader(): void {
    this._selectedHeader$.next(this.monthlyLimitService.getActiveMonthlyHeader())
    this.showAddEntry = true;
  }

  public selectPreviousHeader(id: string): void {
    const header: MonthlyLimitHeader = this.monthlyLimitService.getMonthlyLimitHistory(id);
    this._selectedHeader$.next(header);
    this.showAddEntry = false;
  }

  public selectPreviousHeaders(): void {
    this._selectedPreviousHeaders$.next(this.monthlyLimitService.getMonthlyLimitHistoryList());
  }

}
