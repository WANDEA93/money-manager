import { TestBed } from '@angular/core/testing';

import { MonthlyLimitsViewService } from './monthly-limits-view.service';

describe('MonthlyLimitsViewService', () => {
  let service: MonthlyLimitsViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthlyLimitsViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
