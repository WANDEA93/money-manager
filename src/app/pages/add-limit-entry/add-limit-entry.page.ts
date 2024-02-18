import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-add-limit-entry',
  templateUrl: './add-limit-entry.page.html',
  styleUrls: ['./add-limit-entry.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AddLimitEntryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
