import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {LimitItemComponent} from "../../components/limit-item/limit-item.component";
import {MonthlyLimitDetail} from "../../models/monthly-limit";
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

  public limits?: MonthlyLimitDetail[] = [];

  constructor(private monthlyLimitsViewService: MonthlyLimitsViewService) {

  }

  ngOnInit() {
    // this.limitService.getActiveMonthlyLimit().subscribe(
    //   (header: MonthlyLimitHeader) => {
    //     this.limits = header.details;
    //     this.limitsEntryViewService.setMonthlyLimitHeader(header);
    //   }
    // )
    const header = this.monthlyLimitsViewService.header;
    if (header) {
      this.limits = header.details;
    }
  }

}
