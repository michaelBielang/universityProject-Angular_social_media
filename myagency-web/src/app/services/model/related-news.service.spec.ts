import { TestBed } from '@angular/core/testing';

import { RelatedNewsService } from './related-news.service';

describe('RelatedNewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RelatedNewsService = TestBed.get(RelatedNewsService);
    expect(service).toBeTruthy();
  });
});
