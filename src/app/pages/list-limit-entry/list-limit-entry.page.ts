import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {addIcons} from "ionicons";
import {listCircle, reader, send} from "ionicons/icons";
import {ExpenditureEntry} from "../../models/expenditure-entry";

@Component({
  selector: 'app-list-limit-entry',
  templateUrl: './list-limit-entry.page.html',
  styleUrls: ['./list-limit-entry.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ListLimitEntryPage implements OnInit {

  public entries: ExpenditureEntry[] = [];
  constructor() {
    addIcons({listCircle, send, reader})
  }

  ngOnInit() {
    this.entries = [
      {
        id: 1,
        amount: 5000,
        date: new Date(2024, 1, 18),
        vendor: 'Bandaragama Coop',
        comment: 'Kumeri ge puke amaruwata beheth ganna gya gamana'
      }
    ];
  }

}
