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
import {take} from "rxjs";

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
    this.limitViewService.activeDetail.pipe(take(1)).subscribe((monthlyDetail: MonthlyLimitDetail) => {
      this.detail = monthlyDetail;
      this.showAddEntry = this.limitViewService.showAddEntry;
      this.header = this.limitViewService.header;
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
