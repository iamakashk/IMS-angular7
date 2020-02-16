import { TestBed } from '@angular/core/testing';

import { SourceMasterService } from './source-master.service';

describe('SourceMasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SourceMasterService = TestBed.get(SourceMasterService);
    expect(service).toBeTruthy();
  });
});
