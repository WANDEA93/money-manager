import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormToolbarButtonsComponent } from './form-toolbar-buttons.component';

describe('FormToolbarButtonsComponent', () => {
  let component: FormToolbarButtonsComponent;
  let fixture: ComponentFixture<FormToolbarButtonsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormToolbarButtonsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormToolbarButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
