import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExceptionsPage } from './exceptions.page';

describe('ExceptionsPage', () => {
  let component: ExceptionsPage;
  let fixture: ComponentFixture<ExceptionsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExceptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
