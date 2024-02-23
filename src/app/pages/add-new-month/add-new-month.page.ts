import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, RequiredValidator} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ToolbarComponent} from "../../components/toolbar/toolbar.component";
import {MonthlyLimitsService} from "../../services/monthly-limits.service";
import {Router} from "@angular/router";
import {addIcons} from "ionicons";
import {checkmark, close} from "ionicons/icons";
import {MonthlyLimitsViewService} from "../../services/monthly-limits-view.service";

@Component({
  selector: 'app-add-new-monthly-limit',
  templateUrl: './add-new-month.page.html',
  styleUrls: ['./add-new-month.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ToolbarComponent, ReactiveFormsModule]
})
export class AddNewMonthPage {

  public form: FormGroup;

  constructor(private fb: FormBuilder,
              private monthlyLimitService: MonthlyLimitsService,
              private viewService: MonthlyLimitsViewService,
              private router: Router) {
    addIcons({checkmark, close})
    this.form = this.fb.group({
      month: [''],
      year: []
    });
  }

  monthLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  public onCancel(): void {

  }

  public onSave(): void {
    const {month, year} = this.form.value;
    this.monthlyLimitService.createActiveMonthlyLimit(month, year);
    this.viewService.selectPreviousHeaders();
    this.router.navigate(['/'])
  }


}
