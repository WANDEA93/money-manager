import { TestBed } from '@angular/core/testing';

import { LimitsHistoryResolver } from './limits-history.resolver';

describe('LimitsHistoryResolver', () => {
  let resolver: LimitsHistoryResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LimitsHistoryResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
