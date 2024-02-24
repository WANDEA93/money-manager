import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";
import {checkmark, close} from "ionicons/icons";

@Component({
  selector: 'app-form-toolbar-buttons',
  standalone: true,
  templateUrl: './form-toolbar-buttons.component.html',
  styleUrls: ['./form-toolbar-buttons.component.scss'],
  imports: [
    IonicModule
  ]
})
export class FormToolbarButtonsComponent  {

  @Input()
  public saveEnabled: boolean = true;

  @Output()
  public save: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public cancel: EventEmitter<void> = new EventEmitter<void>();
  constructor() {
    addIcons({checkmark, close})
  }

  public saveClicked(): void {
    this.save.emit();
  }

  public cancelClicked(): void {
    this.cancel.emit();
  }



}
