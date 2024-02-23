import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ToolbarComponent} from "../../components/toolbar/toolbar.component";
import {addIcons} from "ionicons";
import {cashOutline, walletOutline} from "ionicons/icons";

@Component({
  selector: 'app-savings',
  templateUrl: './bank-accounts-page.component.html',
  styleUrls: ['./bank-accounts-page.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ToolbarComponent]
})
export class BankAccountsPage implements OnInit {

  constructor() {
    addIcons({cashOutline, walletOutline})
  }

  ngOnInit() {
  }

}
