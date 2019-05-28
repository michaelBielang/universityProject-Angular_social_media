import { TestBed } from '@angular/core/testing';

import { NavigatedFromRouteService } from './navigated-from-route.service';

describe('NavigatedFromRouteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavigatedFromRouteService = TestBed.get(NavigatedFromRouteService);
    expect(service).toBeTruthy();
  });
});
