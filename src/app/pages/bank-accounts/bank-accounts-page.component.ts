import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ToolbarComponent} from "../../components/toolbar/toolbar.component";
import {addIcons} from "ionicons";
import {cashOutline, walletOutline} from "ionicons/icons";
import {BankAccountService} from "../../services/bank-account.service";

@Component({
  selector: 'app-savings',
  templateUrl: './bank-accounts-page.component.html',
  styleUrls: ['./bank-accounts-page.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ToolbarComponent]
})
export class BankAccountsPage {

  constructor(public bankAccountService: BankAccountService) {
    addIcons({cashOutline, walletOutline})
  }


}
