import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {LimitItemComponent} from "../../components/limit-item/limit-item.component";
import {MonthlyLimitDetail, MonthlyLimitHeader} from "../../models/monthly-limit";
import {ToolbarComponent} from "../../components/toolbar/toolbar.component";
import {MonthlyLimitsViewService} from "../../services/monthly-limits-view.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-monthly-limits',
  templateUrl: './monthly-limits.page.html',
  styleUrls: ['./monthly-limits.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, LimitItemComponent, ToolbarComponent]
})
export class MonthlyLimitsPage implements OnInit {

  public header?: MonthlyLimitHeader;

  constructor(private monthlyLimitsViewService: MonthlyLimitsViewService,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {

    this.monthlyLimitsViewService.selectedHeader.subscribe((header) => {
      this.header = header;
    });

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if (!paramMap.has('id')) {
        return;
      }

      const id: string = paramMap.get('id')!;
      if (id === 'active') {
        this.monthlyLimitsViewService.selectActiveHeader()
      } else {
        this.monthlyLimitsViewService.selectPreviousHeader(id);
      }
    });


  }

  public getPageTitle(): string {
    return `Monthly Limits - ${this.header?.month}/${this.header?.year}`
  }
}
