import { TestBed } from '@angular/core/testing';

import { LimitEntryViewService } from './limit-entry-view.service';

describe('LimitEntryViewService', () => {
  let service: LimitEntryViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LimitEntryViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
