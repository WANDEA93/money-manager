import {Component, Input, OnInit} from '@angular/core';
import {LimitModel} from "../../models.LimitModel";
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";


@Component({
  selector: 'app-limit-item',
  standalone: true,
  templateUrl: './limit-item.component.html',
  styleUrls: ['./limit-item.component.scss'],
  imports: [
    IonicModule
  ]
})
export class LimitItemComponent {

  @Input()
  public limit?: LimitModel;

  constructor() {
  }


  public calculatePercentage(): number {
    if(!this.limit){
      return 0;
    }
    return (this.limit.amount / this.limit.maxAmount) * 100;
  }

}
