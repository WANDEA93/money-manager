import { TestBed } from '@angular/core/testing';

import { MonthlyLimitsService } from './monthly-limits.service';

describe('MonthlyLimitsService', () => {
  let service: MonthlyLimitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthlyLimitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
