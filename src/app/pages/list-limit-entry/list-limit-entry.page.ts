import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {addIcons} from "ionicons";
import {add, cashOutline, listCircle, reader, send} from "ionicons/icons";
import {MonthlyLimitDetail, MonthlyLimitHeader} from "../../models/monthly-limit";
import {ItemTitlePipe} from "../../pipes/item-title.pipe";
import {Router} from "@angular/router";
import {ToolbarComponent} from "../../components/toolbar/toolbar.component";
import {MonthlyLimitsViewService} from "../../services/monthly-limits-view.service";
import {combineLatest, merge, mergeAll, take, withLatestFrom, zip} from "rxjs";

@Component({
  selector: 'app-list-limit-entry',
  templateUrl: './list-limit-entry.page.html',
  styleUrls: ['./list-limit-entry.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ToolbarComponent],
  providers: [ItemTitlePipe]
})
export class ListLimitEntryPage implements OnInit {

  public detail?: MonthlyLimitDetail;
  public header?: MonthlyLimitHeader;

  public showAddEntry: boolean = false;

  constructor(private limitViewService: MonthlyLimitsViewService,
              private itemTitlePipe: ItemTitlePipe,
              private router: Router) {
    addIcons({listCircle, send, reader, add, cashOutline})
  }

  ngOnInit() {
    this.limitViewService.selectedDetail
    .pipe(withLatestFrom(this.limitViewService.selectedHeader))
      .subscribe(([detail, header ]) => {
      this.header = header;
      this.detail = detail;
      this.showAddEntry = this.limitViewService.showAddEntry;
    });
  }

  public getPageTitle(): string {
    let title: string = '';
    if (this.detail) {
      title = this.itemTitlePipe.transform(this.detail.name) + (this.header ? ` - ${this.header.month! + 1}/${this.header?.year}` : '');
    }
    return title;
  }

  public addEntry(): void {
    if (this.detail) {
      this.router.navigate(['/limits', this.detail.name, 'add']);
    }
  }

}
