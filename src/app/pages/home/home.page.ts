import {Component, OnInit} from '@angular/core';
import {IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {
  archiveOutline,
  beerOutline,
  carSportOutline,
  diamondOutline,
  ellipse,
  fastFoodOutline,
  fileTrayOutline,
  homeOutline,
  rainyOutline,
  square,
  triangle,
  walletOutline
} from "ionicons/icons";
import {MonthlyLimitsService} from "../../services/monthly-limits.service";
import {MonthlyLimitHeader} from "../../models/monthly-limit";
import {MonthlyLimitsViewService} from "../../services/monthly-limits-view.service";
import {take} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonTabs]
})
export class HomePage implements OnInit {

  constructor(private limitService: MonthlyLimitsService,
              private limitViewService: MonthlyLimitsViewService) {
    addIcons({
      triangle,
      ellipse,
      square,
      beerOutline,
      homeOutline,
      carSportOutline,
      walletOutline,
      fastFoodOutline,
      fileTrayOutline,
      archiveOutline,
      diamondOutline,
      rainyOutline
    });
  }

  public ngOnInit(): void {
    this.limitService.getActiveMonthlyLimit().pipe(take(1)).subscribe(
      (header: MonthlyLimitHeader) => {
        this.limitViewService.header = header;
      }
    )
  }


}
