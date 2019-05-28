import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailsInfosComponent } from './job-details-infos.component';

describe('JobDetailsInfosComponent', () => {
  let component: JobDetailsInfosComponent;
  let fixture: ComponentFixture<JobDetailsInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobDetailsInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDetailsInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
