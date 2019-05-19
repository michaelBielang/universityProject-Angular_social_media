import { TestBed } from '@angular/core/testing';

import { ClientJobsService } from './client-jobs.service';

describe('ClientJobsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientJobsService = TestBed.get(ClientJobsService);
    expect(service).toBeTruthy();
  });
});
