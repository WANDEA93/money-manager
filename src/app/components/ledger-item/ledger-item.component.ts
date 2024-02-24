import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {LedgerEntry, LedgerType} from "../../models/ledger-entry";
import {addIcons} from "ionicons";
import {trendingDownOutline, trendingUpOutline} from "ionicons/icons";

@Component({
  selector: 'app-ledger-item',
  standalone: true,
  templateUrl: './ledger-item.component.html',
  styleUrls: ['./ledger-item.component.scss'],
  imports: [
    IonicModule
  ]
})
export class LedgerItemComponent {

  @Input()
  public entry?: LedgerEntry;
  constructor() {
    addIcons({trendingUpOutline, trendingDownOutline})
  }

  protected readonly LedgerType = LedgerType;
}
