import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ToolbarComponent} from "../../../components/toolbar/toolbar.component";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {LedgerItemComponent} from "../../../components/ledger-item/ledger-item.component";
import {addIcons} from "ionicons";
import {add} from "ionicons/icons";
import {BankAccountService, LedgerEntryAccountType} from "../../../services/bank-account.service";
import {LedgerEntry} from "../../../models/ledger-entry";

@Component({
  selector: 'app-list-ledger-entry',
  templateUrl: './list-ledger-entry.page.html',
  styleUrls: ['./list-ledger-entry.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ToolbarComponent, LedgerItemComponent]
})
export class ListLedgerEntryPage implements OnInit {

  public pageTitle: string = '';
  public ledgerEntries: LedgerEntry[] = [];

  private selectedCategory: LedgerEntryAccountType = 'savings';

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private bankAccService: BankAccountService) {
    addIcons({add})
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if (!paramMap.has('category')) {
        return;
      }

      if (paramMap.get('category') === 'savings') {
        this.loadSavingAccountEntries();
        this.pageTitle = 'Savings Account';
        this.selectedCategory = 'savings';
      } else {
        this.loadCheckingAccountEntries();
        this.pageTitle = 'Checking Account';
        this.selectedCategory = 'checking';
      }
    });
  }

  private loadSavingAccountEntries() {
    this.ledgerEntries = this.bankAccService.getSavingsAccountEntries();
  }

  private loadCheckingAccountEntries() {
    this.ledgerEntries = this.bankAccService.getCheckingAccountEntries();
  }

  public addEntry(): void {
    this.bankAccService.setEntryTarget(this.selectedCategory);
    this.router.navigate(['/bank-accounts/add']);
  }


}
