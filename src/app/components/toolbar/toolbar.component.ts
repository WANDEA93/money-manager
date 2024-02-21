import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";
import {addCircleOutline, ellipsisVerticalOutline} from "ionicons/icons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  imports: [
    IonicModule
  ]
})
export class ToolbarComponent  {

  @ViewChild('popover') popover: any;

  @Input()
  title: string = '';

  @Input()
  showMenu: boolean = true;

  isOpen = false;
  constructor(private router: Router) {
    addIcons({ellipsisVerticalOutline, addCircleOutline})
  }

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

  public goToAddNewMonth(): void {
    this.router.navigate(['/add-new-monthly-limit']);
  }

}
