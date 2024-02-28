import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AlertController, IonicModule} from '@ionic/angular';
import {ToolbarComponent} from "../../components/toolbar/toolbar.component";
import {Loan} from "../../models/loan.model";
import {LoanService} from "../../servcies/loan.service";
import {ActivatedRoute, Router} from "@angular/router";
import {addIcons} from "ionicons";
import {add, cash, skullOutline} from "ionicons/icons";

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
              private activatedRoute: ActivatedRoute,
              private alertController: AlertController) {
    addIcons({add, cash, skullOutline})
  }

  public ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(() => {
      this.loans = this.loanService.getActiveLoans();
    });

  }

  public addEntry(): void {
    this.router.navigate(['/loans/add'])
  }

  public async onSettleClick(loan: Loan): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Settle Loan',
      subHeader: 'Enter Received Amount',
      inputs: [
        {
          type: 'number',
          name: 'amount',
          label: 'Amount',
          value: loan.amount - loan.received,
          placeholder: 'Received Amount'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Settle',
          handler: (value) => this.receiveLoan(loan, value['amount'])
        },
      ]
    })

    await alert.present();
  }

  private receiveLoan(loan: Loan, amount: number): void {
    if(amount < 0 || amount > this.getBalance(loan)){
      console.error('Entered Amount is not valid');
    }
    this.loanService.settleLoan(loan.id, amount);
    this.loans = this.loanService.getActiveLoans();
  }

  public getAmountText(loan: Loan): string {
    let text: string;
    if (loan.received !== 0) {
      console.log(loan.received);
      text = `${loan.received.toString()}/${loan.amount}`
    } else {
      text = loan.amount.toString();
    }

    return text;
  }

  private getBalance(loan: Loan): number {
    return loan.amount - loan.received;
  }

}
