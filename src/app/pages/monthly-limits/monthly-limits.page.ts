import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {MonthlyLimitModel} from "../../models/monthly-limit-model";
import {LimitItemComponent} from "../../components/limit-item/limit-item.component";
import {MonthlyLimitsService} from "../../services/monthly-limits.service";
import {addIcons} from "ionicons";
import {beer, beerOutline, ellipse, square, triangle} from "ionicons/icons";
import {MonthlyLimitDetail, MonthlyLimitHeader} from "../../models/monthly-limit";
import {LimitEntryViewService} from "../../services/limit-entry-view.service";

@Component({
  selector: 'app-monthly-limits',
  templateUrl: './monthly-limits.page.html',
  styleUrls: ['./monthly-limits.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, LimitItemComponent]
})
export class MonthlyLimitsPage implements OnInit {

  public limits?: MonthlyLimitDetail[] = [];
  constructor(private limitService: MonthlyLimitsService,
              private limitsEntryViewService: LimitEntryViewService) {

  }

  ngOnInit() {
   this.limitService.getActiveMonthlyLimit().subscribe(
     (header: MonthlyLimitHeader) => {
       this.limits = header.details;
       this.limitsEntryViewService.setMonthlyLimitHeader(header);
     }
   )
  }

}
