import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddLedgerEntryPage } from './add-ledger-entry.page';

describe('AddLedgerEntryPage', () => {
  let component: AddLedgerEntryPage;
  let fixture: ComponentFixture<AddLedgerEntryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddLedgerEntryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
