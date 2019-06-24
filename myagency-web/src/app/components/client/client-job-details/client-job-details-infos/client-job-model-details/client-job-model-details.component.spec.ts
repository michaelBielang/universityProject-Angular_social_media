import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientJobModelDetailsComponent } from './client-job-model-details.component';

describe('ClientJobModelDetailsComponent', () => {
  let component: ClientJobModelDetailsComponent;
  let fixture: ComponentFixture<ClientJobModelDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientJobModelDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientJobModelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
