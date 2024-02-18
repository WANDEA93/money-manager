import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-exceptions',
  templateUrl: './exceptions.page.html',
  styleUrls: ['./exceptions.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ExceptionsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
