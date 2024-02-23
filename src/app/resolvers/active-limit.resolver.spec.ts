import { TestBed } from '@angular/core/testing';

import { ActiveLimitResolver } from './active-limit.resolver';

describe('ActiveLimitResolver', () => {
  let resolver: ActiveLimitResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ActiveLimitResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
