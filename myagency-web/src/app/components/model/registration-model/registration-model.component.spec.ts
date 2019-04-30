import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationModelComponent } from './registration-model.component';

describe('RegistrationModelComponent', () => {
  let component: RegistrationModelComponent;
  let fixture: ComponentFixture<RegistrationModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
