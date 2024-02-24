import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransferAmountsPage } from './transfer-amounts.page';

describe('TransferAmountsPage', () => {
  let component: TransferAmountsPage;
  let fixture: ComponentFixture<TransferAmountsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TransferAmountsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
