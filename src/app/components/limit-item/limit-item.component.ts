import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MonthlyLimitModel} from "../../models/monthly-limit-model";
import {IonicModule} from "@ionic/angular";
import {ItemTitlePipe} from "../../pipes/item-title.pipe";
import {MonthlyLimitsService} from "../../services/monthly-limits.service";
import {MonthlyLimitDetail} from "../../models/monthly-limit";
import {LimitEntryViewService} from "../../services/limit-entry-view.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-limit-item',
  standalone: true,
  templateUrl: './limit-item.component.html',
  styleUrls: ['./limit-item.component.scss'],
  imports: [
    IonicModule,
    ItemTitlePipe
  ]
})
export class LimitItemComponent implements OnChanges {

  @Input()
  public limit?: MonthlyLimitDetail;

  public model?: MonthlyLimitModel;

  constructor(private limitService: MonthlyLimitsService,
              private limitViewService: LimitEntryViewService,
              private router: Router) {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['limit']) {
      this.initModel();
    }
  }

  private initModel(): void {
    if (this.limit) {
      const model = this.limitService.getModel(this.limit?.name);
      if (model) {
        this.model = model;
      }
    }
  }

  public calculatePercentage(): number {
    if (!this.limit || !this.model) {
      return 0;
    }
    return (this.limit.amount / this.model.maxAmount);
  }

  public setView(): void {
    if (this.limit) {
      this.limitViewService.setMonthlyLimit(this.limit);
      this.router.navigate(['/limits', this.limit.name]);
    }
  }

}
