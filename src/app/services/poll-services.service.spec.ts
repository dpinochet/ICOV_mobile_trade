import { TestBed } from '@angular/core/testing';

import { PollServicesService } from './poll-services.service';

describe('PollServicesService', () => {
  let service: PollServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PollServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
