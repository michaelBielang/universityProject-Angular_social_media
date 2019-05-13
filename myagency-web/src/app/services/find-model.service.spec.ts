import { TestBed } from '@angular/core/testing';

import { FindModelService } from './find-model.service';

describe('FindModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FindModelService = TestBed.get(FindModelService);
    expect(service).toBeTruthy();
  });
});
