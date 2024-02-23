import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {MonthlyLimitsViewService} from "../services/monthly-limits-view.service";

@Injectable({
  providedIn: 'root'
})
export class LimitsHistoryResolver implements Resolve<boolean> {

  constructor(private limitViewService: MonthlyLimitsViewService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.limitViewService.selectPreviousHeaders();
    return of(true);
  }
}
