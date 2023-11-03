import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessProductsComponent } from './business-products.component';

describe('BusinessProductsComponent', () => {
  let component: BusinessProductsComponent;
  let fixture: ComponentFixture<BusinessProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessProductsComponent]
    });
    fixture = TestBed.createComponent(BusinessProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
