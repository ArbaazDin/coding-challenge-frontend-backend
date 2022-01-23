import { TestBed } from '@angular/core/testing';

import { LordOfTheRingsService } from './lord-of-the-rings-logic.service';

describe('LordOfTheRingsService', () => {
  let service: LordOfTheRingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LordOfTheRingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
