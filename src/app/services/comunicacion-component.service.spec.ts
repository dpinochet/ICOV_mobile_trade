import { TestBed } from '@angular/core/testing';

import { ComunicacionComponentService } from './comunicacion-component.service';

describe('ComunicacionComponentService', () => {
  let service: ComunicacionComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicacionComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
