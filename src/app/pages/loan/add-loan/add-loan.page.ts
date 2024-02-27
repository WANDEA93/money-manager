import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {FormToolbarButtonsComponent} from "../../../components/form-toolbar-buttons/form-toolbar-buttons.component";
import {LoanService} from "../../../servcies/loan.service";
import {Router} from "@angular/router";
import {ToolbarComponent} from "../../../components/toolbar/toolbar.component";

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.page.html',
  styleUrls: ['./add-loan.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, FormToolbarButtonsComponent, ToolbarComponent]
})
export class AddLoanPage {

  public form: FormGroup = new FormGroup({
    amount: new FormControl('', [Validators.required]),
    lender:  new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });

  constructor(private loanService: LoanService,
              private router: Router) {
  }

  public onSave(): void {
    this.loanService.createLoan(this.form.value);
    this.router.navigate(['/home/loans']);
  }

  public onCancel(): void {
    this.router.navigate(['/home/loans']);
  }


}
