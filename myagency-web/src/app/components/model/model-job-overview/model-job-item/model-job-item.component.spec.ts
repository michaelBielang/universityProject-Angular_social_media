import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ModelJobItemComponent} from './model-job-item.component';

describe('ModelJobItemComponent', () => {
  let component: ModelJobItemComponent;
  let fixture: ComponentFixture<ModelJobItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModelJobItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelJobItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
