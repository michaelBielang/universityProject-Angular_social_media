import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelJobDetailsInfosComponent } from './model-job-details-infos.component';

describe('ModelJobDetailsInfosComponent', () => {
  let component: ModelJobDetailsInfosComponent;
  let fixture: ComponentFixture<ModelJobDetailsInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelJobDetailsInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelJobDetailsInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
