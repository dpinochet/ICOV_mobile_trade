import { TestBed } from '@angular/core/testing';

import { FacebookConectionServiceService } from './facebook-conection-service.service';

describe('FacebookConectionServiceService', () => {
  let service: FacebookConectionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacebookConectionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
