import { TestBed } from '@angular/core/testing';

import { EnumHandlerService } from './enum-handler.service';

describe('EnumHandlerService', () => {
  let service: EnumHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnumHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
