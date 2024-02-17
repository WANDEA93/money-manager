import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {beerOutline, carSportOutline, ellipse, homeOutline, square, triangle, walletOutline} from "ionicons/icons";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonTabs]
})
export class HomePage  {

  constructor() {
    addIcons({ triangle, ellipse, square, beerOutline, homeOutline, carSportOutline, walletOutline });
  }



}
