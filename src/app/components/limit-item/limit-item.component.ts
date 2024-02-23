import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MonthlyLimitModel} from "../../models/monthly-limit-model";
import {IonicModule} from "@ionic/angular";
import {ItemTitlePipe} from "../../pipes/item-title.pipe";
import {MonthlyLimitsService} from "../../services/monthly-limits.service";
import {MonthlyLimitDetail} from "../../models/monthly-limit";
import {Router} from "@angular/router";
import {MonthlyLimitsViewService} from "../../services/monthly-limits-view.service";


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
export class LimitItemComponent implements OnInit {

  @Input()
  public limitDetail?: MonthlyLimitDetail;

  public model?: MonthlyLimitModel;

  constructor(private limitService: MonthlyLimitsService,
              private limitViewService: MonthlyLimitsViewService,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.initModel();
  }

  private initModel(): void {
    if (this.limitDetail) {
      const model = this.limitService.getModel(this.limitDetail?.name);
      if (model) {
        this.model = model;
      }
    }
  }

  public calculatePercentage(): number {
    if (!this.limitDetail || !this.model) {
      return 0;
    }
    return (this.limitDetail.amount / this.model.maxAmount);
  }

  public setView(): void {
    if (this.limitDetail) {
      this.limitViewService.setActiveDetails(this.limitDetail);
      this.router.navigate(['/limits', this.limitDetail.name]);
    }
  }

}
