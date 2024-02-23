import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ToolbarComponent} from "../../../components/toolbar/toolbar.component";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {LedgerItemComponent} from "../../../components/ledger-item/ledger-item.component";

@Component({
  selector: 'app-list-ledger-entry',
  templateUrl: './list-ledger-entry.page.html',
  styleUrls: ['./list-ledger-entry.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ToolbarComponent, LedgerItemComponent]
})
export class ListLedgerEntryPage implements OnInit {

  public pageTitle: string = '';
  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) =>{
      if(!paramMap.has('category')){
        return;
      }

      if(paramMap.get('category') === 'savings'){
        this.loadSavingAccountEntries();
        this.pageTitle = 'Savings Account'
      }else{
        this.loadCheckingAccountEntries();
        this.pageTitle = 'Checking Account';
      }
    });
  }

  private loadSavingAccountEntries() {

  }

  private loadCheckingAccountEntries() {

  }


}
