import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddLoanPage } from './add-loan.page';

describe('AddLoanPage', () => {
  let component: AddLoanPage;
  let fixture: ComponentFixture<AddLoanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddLoanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
