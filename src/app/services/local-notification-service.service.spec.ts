import { TestBed } from '@angular/core/testing';

import { LocalNotificationServiceService } from './local-notification-service.service';

describe('LocalNotificationServiceService', () => {
  let service: LocalNotificationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalNotificationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
