import { TestBed } from '@angular/core/testing';

import { ListAdvertisementService } from './list-advertisement.service';

describe('ListAdvertisementService', () => {
  let service: ListAdvertisementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListAdvertisementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
