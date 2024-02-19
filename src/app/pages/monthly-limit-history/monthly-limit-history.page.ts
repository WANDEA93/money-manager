import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {MonthlyLimitsService} from "../../services/monthly-limits.service";
import {MonthlyLimitHeader} from "../../models/monthly-limit";
import {take} from "rxjs";

@Component({
  selector: 'app-monthly-limit-history',
  templateUrl: './monthly-limit-history.page.html',
  styleUrls: ['./monthly-limit-history.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MonthlyLimitHistoryPage implements OnInit {

  public history: Record<string, MonthlyLimitHeader[]> = {};



  constructor(private limitsService: MonthlyLimitsService) { }

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
    console.log(`year: ${year}, month: ${month}`)
  }

}
