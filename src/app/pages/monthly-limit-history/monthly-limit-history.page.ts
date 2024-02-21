import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {MonthlyLimitsService} from "../../services/monthly-limits.service";
import {MonthlyLimitHeader} from "../../models/monthly-limit";
import {take} from "rxjs";
import {ToolbarComponent} from "../../components/toolbar/toolbar.component";
import {LimitEntryViewService} from "../../services/limit-entry-view.service";

@Component({
  selector: 'app-monthly-limit-history',
  templateUrl: './monthly-limit-history.page.html',
  styleUrls: ['./monthly-limit-history.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ToolbarComponent]
})
export class MonthlyLimitHistoryPage implements OnInit {

  public history: Record<string, MonthlyLimitHeader[]> = {};
  constructor(private limitsService: MonthlyLimitsService,
              private limitsViewService: LimitEntryViewService) { }

  ngOnInit() {
    this.limitsService.getMonthlyLimitHistory().pipe(take(1)).subscribe((history) => {
      this.processHeaders(history);
    })
  }

  private processHeaders(headers: MonthlyLimitHeader[]): void {
    const groupedHeaders =  headers.reduce((result, currentValue) => {
      const key = currentValue['year'];
      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(currentValue);
      return result;
    }, {} as Record<string, MonthlyLimitHeader[]>);
    this.history = groupedHeaders;
  }

  public getHistoryYears(): string[] {
    return Object.keys(this.history);
  }

  public getMonths(year: string): string[] {
    return this.history[year].map(h => h.month.toString());
  }

  public goToDetails(year: string, month: string): void {
    const monthlyHeader: MonthlyLimitHeader = this.getHeader(year, +month);
    this.limitsViewService.setMonthlyLimitHeader(monthlyHeader)
    // this.limitsViewService.setMonthlyLimit(monthlyHeader.details);
  }

  private getHeader(year: string, month: number): MonthlyLimitHeader {
    const monthlyHeaders: MonthlyLimitHeader[] = this.history[year];
    const header = monthlyHeaders.find(m => m.month === month);
    return header!;
  }

}
