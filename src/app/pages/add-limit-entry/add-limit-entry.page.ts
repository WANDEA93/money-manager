import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {addIcons} from "ionicons";
import {checkmark, close} from "ionicons/icons";
import {MonthlyLimitsService} from "../../services/monthly-limits.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ExpenditureEntry} from "../../models/expenditure-entry";
import {ToolbarComponent} from "../../components/toolbar/toolbar.component";
import {FormToolbarButtonsComponent} from "../../components/form-toolbar-buttons/form-toolbar-buttons.component";

@Component({
  selector: 'app-add-limit-entry',
  templateUrl: './add-limit-entry.page.html',
  styleUrls: ['./add-limit-entry.page.scss'],
  standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, ToolbarComponent, FormToolbarButtonsComponent]
})
export class AddLimitEntryPage implements OnInit{

  public form: FormGroup;
  private name: string = '';

  constructor(private limitService: MonthlyLimitsService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

    addIcons({checkmark, close})
    this.form = new FormGroup({
      amount: new FormControl('', [Validators.required]),
      date: new FormControl(new Date().toDateString()),
      vendor: new FormControl('', [Validators.required]),
      comment: new FormControl()
    });
  }

  public ngOnInit(): void {
    const name: string | null = this.activatedRoute.snapshot.paramMap.get('name');
    if(name){
      this.name = name;
    }
  }

  public onSave(): void {
    if(!this.name){
      return;
    }
    const payload: any = this.form.value;
    if(payload['date'] === undefined){
      payload['date'] = new Date();
    }
    this.limitService.addEntry(payload as ExpenditureEntry, this.name);
  }

  public onCancel(): void {
    this.router.navigate(['/home']); //TODO: should be back
  }


}
