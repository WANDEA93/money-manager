import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddNewMonthPage } from './add-new-month.page';

describe('AddNewMonthlyLimitPage', () => {
  let component: AddNewMonthPage;
  let fixture: ComponentFixture<AddNewMonthPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddNewMonthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
