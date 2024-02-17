import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonthlyLimitsPage } from './monthly-limits.page';

describe('MonthlyLimitsPage', () => {
  let component: MonthlyLimitsPage;
  let fixture: ComponentFixture<MonthlyLimitsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MonthlyLimitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
