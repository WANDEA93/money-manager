import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";
import {addCircleOutline, ellipsisVerticalOutline} from "ionicons/icons";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  imports: [
    IonicModule
  ]
})
export class ToolbarComponent  implements OnInit {

  @Input()
  title: string = '';

  @Input()
  showMenu: boolean = true;
  constructor() {
    addIcons({ellipsisVerticalOutline, addCircleOutline})
  }

  ngOnInit() {}

}
