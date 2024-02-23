import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, RequiredValidator, Validators} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ToolbarComponent} from "../../../components/toolbar/toolbar.component";
import {LedgerType} from "../../../models/ledger-entry";
import {FormToolbarButtonsComponent} from "../../../components/form-toolbar-buttons/form-toolbar-buttons.component";
import {BankAccountService} from "../../../services/bank-account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-ledger-entry',
  templateUrl: './add-ledger-entry.page.html',
  styleUrls: ['./add-ledger-entry.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ToolbarComponent, ReactiveFormsModule, FormToolbarButtonsComponent]
})
export class AddLedgerEntryPage {

  public formGroup: FormGroup;
  constructor(private fb: FormBuilder,
              private router: Router,
              private bankAccountService: BankAccountService) {
    this.formGroup = this.fb.group({
      type: [],
      amount: ['', [Validators.required]],
      description: [],
    });
  }

  public onCancel(): void {
    this.router.navigate(['/bank-accounts/view', this.bankAccountService.getEntryTarget()]);
  }

  public onSave(): void {
    this.bankAccountService.addLedgerEntry(this.formGroup.value);
    this.router.navigate(['/bank-accounts/view', this.bankAccountService.getEntryTarget()]);

  }


  protected readonly LedgerType = LedgerType;
}
