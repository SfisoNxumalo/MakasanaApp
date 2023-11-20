import { TestBed } from '@angular/core/testing';

import { CustProductsService } from './cust-products.service';

describe('CustProductsService', () => {
  let service: CustProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
