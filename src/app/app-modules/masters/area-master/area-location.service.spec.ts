import { TestBed } from '@angular/core/testing';

import { AreaLocationService } from './area-location.service';

describe('AreaLocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AreaLocationService = TestBed.get(AreaLocationService);
    expect(service).toBeTruthy();
  });
});
