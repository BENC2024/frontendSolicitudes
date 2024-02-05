import { TestBed } from '@angular/core/testing';

import { MultitenantService } from './multitenant.service';

describe('MultitenantService', () => {
  let service: MultitenantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultitenantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
