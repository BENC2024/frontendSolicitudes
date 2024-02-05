import { TestBed } from '@angular/core/testing';

import { RequestExpenseService } from './request-expense.service';

describe('RequestExpenseService', () => {
  let service: RequestExpenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestExpenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
