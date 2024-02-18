import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListLimitEntryPage } from './list-limit-entry.page';

describe('ListLimitEntryPage', () => {
  let component: ListLimitEntryPage;
  let fixture: ComponentFixture<ListLimitEntryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListLimitEntryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
