import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {addIcons} from "ionicons";
import {checkmark, close} from "ionicons/icons";
import {MonthlyLimitsService} from "../../services/monthly-limits.service";
import {Router} from "@angular/router";
import {ExpenditureEntry} from "../../models/expenditure-entry";

@Component({
  selector: 'app-add-limit-entry',
  templateUrl: './add-limit-entry.page.html',
  styleUrls: ['./add-limit-entry.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class AddLimitEntryPage {

  public form: FormGroup;

  constructor(private limitService: MonthlyLimitsService,
              private router: Router) {

    addIcons({checkmark, close})
    this.form = new FormGroup({
      amount: new FormControl(),
      date: new FormControl(new Date().toDateString()),
      vendor: new FormControl(),
      comment: new FormControl()
    });
  }

  public onSave(): void {
    const payload: any = this.form.value;
    if(payload['date'] === undefined){
      payload['date'] = new Date();
    }

    this.limitService.addEntry(payload as ExpenditureEntry);

  }

  public onCancel(): void {
    this.router.navigate(['/home']); //TODO: should be back
  }


}
