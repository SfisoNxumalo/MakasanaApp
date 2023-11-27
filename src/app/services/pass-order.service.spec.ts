import { TestBed } from '@angular/core/testing';

import { PassOrderService } from './pass-order.service';

describe('PassOrderService', () => {
  let service: PassOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
