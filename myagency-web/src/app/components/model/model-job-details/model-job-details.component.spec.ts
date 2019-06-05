import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ModelJobDetailsComponent} from './model-job-details.component';

describe('ClientJobDetailsComponent', () => {
  let component: ModelJobDetailsComponent;
  let fixture: ComponentFixture<ModelJobDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModelJobDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelJobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
