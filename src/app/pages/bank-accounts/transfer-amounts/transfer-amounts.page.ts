import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {ToolbarComponent} from "../../../components/toolbar/toolbar.component";
import {FormToolbarButtonsComponent} from "../../../components/form-toolbar-buttons/form-toolbar-buttons.component";
import {BankAccountService} from "../../../services/bank-account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-transfer-amounts',
  templateUrl: './transfer-amounts.page.html',
  styleUrls: ['./transfer-amounts.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ToolbarComponent, ReactiveFormsModule, FormToolbarButtonsComponent]
})
export class TransferAmountsPage  {

  public form: FormGroup = new FormGroup({
    amount: new FormControl(),
    description: new FormControl()
  });
  constructor(private bankAccountService: BankAccountService,
              private router: Router) { }

  public transferAmount(): void {
    this.router.navigate(['/home/bank-accounts']);
  }

  public cancelTransfer(): void {
    this.router.navigate(['/home/bank-accounts']);
  }
}
