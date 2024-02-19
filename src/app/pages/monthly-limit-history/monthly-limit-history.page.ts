import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-monthly-limit-history',
  templateUrl: './monthly-limit-history.page.html',
  styleUrls: ['./monthly-limit-history.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MonthlyLimitHistoryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
