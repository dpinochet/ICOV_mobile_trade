import { TestBed } from '@angular/core/testing';

import { ComuniComponentService } from './comuni-component.service';

describe('ComuniComponentService', () => {
  let service: ComuniComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComuniComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
