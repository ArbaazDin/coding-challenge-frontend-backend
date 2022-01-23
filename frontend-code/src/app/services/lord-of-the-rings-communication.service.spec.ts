import { TestBed } from '@angular/core/testing';

import { LordOfTheRingsCommunicationService } from './lord-of-the-rings-communication.service';

describe('LordOfTheRingsCommunicationService', () => {
  let service: LordOfTheRingsCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LordOfTheRingsCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
