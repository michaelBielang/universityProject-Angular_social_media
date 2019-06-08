import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ModelJobOverviewComponent} from './model-job-overview.component';

describe('ModelJobOverviewComponent', () => {
  let component: ModelJobOverviewComponent;
  let fixture: ComponentFixture<ModelJobOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModelJobOverviewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelJobOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
