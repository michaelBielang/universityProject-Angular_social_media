import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ModelLandingPageComponent} from './model-landing-page.component';

describe('ModelLandingPageComponent', () => {
  let component: ModelLandingPageComponent;
  let fixture: ComponentFixture<ModelLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModelLandingPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
