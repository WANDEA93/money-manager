import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BankAccountsPage } from './bank-accounts-page.component';

describe('SavingsPage', () => {
  let component: BankAccountsPage;
  let fixture: ComponentFixture<BankAccountsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BankAccountsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
