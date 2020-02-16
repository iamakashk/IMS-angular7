import { TestBed } from '@angular/core/testing';

import { ItemmasterService } from './itemmaster.service';

describe('ItemmasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemmasterService = TestBed.get(ItemmasterService);
    expect(service).toBeTruthy();
  });
});
