import {TestBed} from '@angular/core/testing';

import {ModelTipService} from './model-tip.service';

describe('ModelTipService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModelTipService = TestBed.get(ModelTipService);
    expect(service).toBeTruthy();
  });
});
