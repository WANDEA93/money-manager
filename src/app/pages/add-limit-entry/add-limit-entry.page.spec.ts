import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddLimitEntryPage } from './add-limit-entry.page';

describe('AddLimitEntryPage', () => {
  let component: AddLimitEntryPage;
  let fixture: ComponentFixture<AddLimitEntryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddLimitEntryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
