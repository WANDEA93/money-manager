import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddNewMonthlyLimitPage } from './add-new-monthly-limit.page';

describe('AddNewMonthlyLimitPage', () => {
  let component: AddNewMonthlyLimitPage;
  let fixture: ComponentFixture<AddNewMonthlyLimitPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddNewMonthlyLimitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
