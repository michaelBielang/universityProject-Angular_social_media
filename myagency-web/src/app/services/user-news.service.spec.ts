import { TestBed } from '@angular/core/testing';

import { UserNewsService } from './user-news.service';

describe('UserNewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserNewsService = TestBed.get(UserNewsService);
    expect(service).toBeTruthy();
  });
});
