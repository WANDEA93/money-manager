import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ToolbarComponent} from "../../components/toolbar/toolbar.component";
import {Loan} from "../../models/loan.model";
import {LoanService} from "../../servcies/loan.service";
import {ActivatedRoute, Router} from "@angular/router";
import {addIcons} from "ionicons";
import {add, cash} from "ionicons/icons";

@Component({
  selector: 'app-loan',
  templateUrl: './loan.page.html',
  styleUrls: ['./loan.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ToolbarComponent]
})
export class LoanPage implements OnInit {

  public loans?: Loan[];
  public alertButtons = ['OK'];
  public alertInputs = [
    {
      label: 'Red',
      type: 'radio',
      value: 'red',
    },
    {
      label: 'Blue',
      type: 'radio',
      value: 'blue',
    },
    {
      label: 'Green',
      type: 'radio',
      value: 'green',
    },
  ];

  constructor(private loanService: LoanService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    addIcons({add, cash})
  }

  public ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(() => {
      this.loans = this.loanService.getActiveLoans();
    });

  }

  public addEntry(): void {
this.router.navigate(['/loans/add'])
  }

  public onSettleClick(loan: Loan): void {

  }

}
