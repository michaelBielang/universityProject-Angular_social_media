import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientJobItemComponent } from './client-job-item.component';

describe('ClientJobItemComponent', () => {
  let component: ClientJobItemComponent;
  let fixture: ComponentFixture<ClientJobItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientJobItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientJobItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
