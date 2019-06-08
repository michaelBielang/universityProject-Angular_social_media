import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientJobOverviewComponent } from './client-job-overview.component';

describe('ClientJobOverviewComponent', () => {
  let component: ClientJobOverviewComponent;
  let fixture: ComponentFixture<ClientJobOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientJobOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientJobOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
