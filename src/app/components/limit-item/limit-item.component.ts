import {Component, Input, OnInit} from '@angular/core';
import {MonthlyLimit} from "../../models/monthly-limit";
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";
import {ItemTitlePipe} from "../../pipes/item-title.pipe";


@Component({
  selector: 'app-limit-item',
  standalone: true,
  templateUrl: './limit-item.component.html',
  styleUrls: ['./limit-item.component.scss'],
  imports: [
    IonicModule,
    ItemTitlePipe
  ]
})
export class LimitItemComponent {

  @Input()
  public limit?: MonthlyLimit;

  constructor() {
  }


  public calculatePercentage(): number {
    if(!this.limit){
      return 0;
    }
    return (this.limit.amount / this.limit.maxAmount);
  }

}
