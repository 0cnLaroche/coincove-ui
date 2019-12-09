import { TestBed } from '@angular/core/testing';

import { ConfidenceService } from './confidence.service';

describe('ConfidenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfidenceService = TestBed.get(ConfidenceService);
    expect(service).toBeTruthy();
  });
});
