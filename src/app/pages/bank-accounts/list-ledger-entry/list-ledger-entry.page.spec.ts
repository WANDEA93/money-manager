import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListLedgerEntryPage } from './list-ledger-entry.page';

describe('ListLedgerEntryPage', () => {
  let component: ListLedgerEntryPage;
  let fixture: ComponentFixture<ListLedgerEntryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListLedgerEntryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
