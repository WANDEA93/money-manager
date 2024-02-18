import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {MonthlyLimit} from "../../models/monthly-limit";
import {LimitItemComponent} from "../../components/limit-item/limit-item.component";
import {MonthlyLimitsService} from "../../services/monthly-limits.service";
import {addIcons} from "ionicons";
import {beer, beerOutline, ellipse, square, triangle} from "ionicons/icons";

@Component({
  selector: 'app-monthly-limits',
  templateUrl: './monthly-limits.page.html',
  styleUrls: ['./monthly-limits.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, LimitItemComponent]
})
export class MonthlyLimitsPage implements OnInit {

  public limits?: MonthlyLimit[] = [];
  constructor(private limitService: MonthlyLimitsService) {

  }

  ngOnInit() {
    this.limits = this.limitService.monthlyLimits;
  }

}
