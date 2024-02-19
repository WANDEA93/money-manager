import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonthlyLimitHistoryPage } from './monthly-limit-history.page';

describe('MonthlyLimitHistoryPage', () => {
  let component: MonthlyLimitHistoryPage;
  let fixture: ComponentFixture<MonthlyLimitHistoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MonthlyLimitHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
