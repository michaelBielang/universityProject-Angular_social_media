import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailsChatComponent } from './job-details-chat.component';

describe('JobDetailsChatComponent', () => {
  let component: JobDetailsChatComponent;
  let fixture: ComponentFixture<JobDetailsChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobDetailsChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDetailsChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
