import { TestBed } from '@angular/core/testing';

import { EnquiryService } from './enquiry.service';

describe('EnquiryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnquiryService = TestBed.get(EnquiryService);
    expect(service).toBeTruthy();
  });
});
