import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {addIcons} from "ionicons";
import {add, cashOutline, listCircle, reader, send} from "ionicons/icons";
import {ExpenditureEntry} from "../../models/expenditure-entry";
import {LimitEntryViewService} from "../../services/limit-entry-view.service";
import {MonthlyLimitDetail, MonthlyLimitHeader} from "../../models/monthly-limit";
import {ItemTitlePipe} from "../../pipes/item-title.pipe";
import {Router} from "@angular/router";

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

  public showAddEntry: boolean = false;

  constructor(private limitEntryViewService: LimitEntryViewService,
              private itemTitlePipe: ItemTitlePipe,
              private router: Router) {
    addIcons({listCircle, send, reader, add, cashOutline})
  }

  ngOnInit() {
    this.limit = this.limitEntryViewService.getMonthlyLimit();
    this.entries = this.limit?.entries || [];
    this.header = this.limitEntryViewService.getMonthlyLimitHeader();

    this.showAddEntry = this.limit !== undefined;
  }

  public getPageTitle(): string {
    let title: string = '';
    if(this.limit){
       title = this.itemTitlePipe.transform(this.limit.name) + (this.header ? ` - ${this.header.month! + 1}/${this.header?.year}` : '');
    }
    return title;
  }

  public addEntry(): void {
    if(this.limit) {
      this.router.navigate(['/limits', this.limit.name, 'add']);
    }
  }

}
