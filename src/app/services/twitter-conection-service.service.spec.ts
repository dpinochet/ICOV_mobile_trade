import { TestBed } from '@angular/core/testing';

import { TwitterConectionServiceService } from './twitter-conection-service.service';

describe('TwitterConectionServiceService', () => {
  let service: TwitterConectionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwitterConectionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
