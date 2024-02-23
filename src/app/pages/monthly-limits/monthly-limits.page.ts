import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {LimitItemComponent} from "../../components/limit-item/limit-item.component";
import {MonthlyLimitHeader} from "../../models/monthly-limit";
import {ToolbarComponent} from "../../components/toolbar/toolbar.component";
import {MonthlyLimitsViewService} from "../../services/monthly-limits-view.service";

@Component({
  selector: 'app-monthly-limits',
  templateUrl: './monthly-limits.page.html',
  styleUrls: ['./monthly-limits.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, LimitItemComponent, ToolbarComponent]
})
export class MonthlyLimitsPage implements OnInit {

  public header?: MonthlyLimitHeader;

  constructor(private monthlyLimitsViewService: MonthlyLimitsViewService) {
  }

  ngOnInit() {
    this.monthlyLimitsViewService.selectedHeader.subscribe((header) => {
      this.header = header;
    });
  }

  public getPageTitle(): string {
    const month: number = this.header ? this.header.month + 1 : 0;
    return `Monthly Limits - ${month}/${this.header?.year}`
  }
}
