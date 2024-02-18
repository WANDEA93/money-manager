import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {addIcons} from "ionicons";
import {listCircle, reader, send} from "ionicons/icons";
import {ExpenditureEntry} from "../../models/expenditure-entry";
import {LimitEntryViewService} from "../../services/limit-entry-view.service";
import {MonthlyLimitDetail, MonthlyLimitHeader} from "../../models/monthly-limit";
import {ItemTitlePipe} from "../../pipes/item-title.pipe";

@Component({
  selector: 'app-list-limit-entry',
  templateUrl: './list-limit-entry.page.html',
  styleUrls: ['./list-limit-entry.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule ],
  providers: [ItemTitlePipe]
})
export class ListLimitEntryPage implements OnInit {

  public entries: ExpenditureEntry[] = [];
  public limit?: MonthlyLimitDetail;
  public header?: MonthlyLimitHeader;

  constructor(private limitEntryViewService: LimitEntryViewService,
              private itemTitlePipe: ItemTitlePipe) {
    addIcons({listCircle, send, reader})
  }

  ngOnInit() {
    this.limit = this.limitEntryViewService.getMonthlyLimit();
    this.entries = this.limit?.entries || [];
    this.header = this.limitEntryViewService.getMonthlyLimitHeader();
  }

  public getPageTitle(): string {
    let title: string = '';
    if(this.limit){
       title = this.itemTitlePipe.transform(this.limit.name) + (this.header ? ` - ${this.header.month! + 1}/${this.header?.year}` : '');
    }
    return title;
  }

}
