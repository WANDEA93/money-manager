import {Component} from '@angular/core';
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

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonTabs]
})
export class HomePage  {

  constructor() {
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



}
