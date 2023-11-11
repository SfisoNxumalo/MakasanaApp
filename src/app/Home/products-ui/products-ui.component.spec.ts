import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsUiComponent } from './products-ui.component';

describe('ProductsUiComponent', () => {
  let component: ProductsUiComponent;
  let fixture: ComponentFixture<ProductsUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsUiComponent]
    });
    fixture = TestBed.createComponent(ProductsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
