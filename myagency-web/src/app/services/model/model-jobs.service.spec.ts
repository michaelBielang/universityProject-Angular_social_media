import {TestBed} from '@angular/core/testing';

import {ModelJobsService} from './model-jobs.service';

describe('ModelJobsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModelJobsService = TestBed.get(ModelJobsService);
    expect(service).toBeTruthy();
  });
});
