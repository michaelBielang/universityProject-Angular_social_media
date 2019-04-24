import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageClientComponent } from './landing-page-client.component';

describe('LandingPageClientComponent', () => {
  let component: LandingPageClientComponent;
  let fixture: ComponentFixture<LandingPageClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
