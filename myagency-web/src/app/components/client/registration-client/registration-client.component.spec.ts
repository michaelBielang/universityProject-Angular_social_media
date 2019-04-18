import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationClientComponent } from './registration-client.component';

describe('RegistrationClientComponent', () => {
  let component: RegistrationClientComponent;
  let fixture: ComponentFixture<RegistrationClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
