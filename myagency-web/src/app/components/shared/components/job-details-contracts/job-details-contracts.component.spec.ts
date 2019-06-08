import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailsContractsComponent } from './job-details-contracts.component';

describe('JobDetailsContractsComponent', () => {
  let component: JobDetailsContractsComponent;
  let fixture: ComponentFixture<JobDetailsContractsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobDetailsContractsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDetailsContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
