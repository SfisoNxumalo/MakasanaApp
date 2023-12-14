import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBusinessProductsComponent } from './view-business-products.component';

describe('ViewBusinessProductsComponent', () => {
  let component: ViewBusinessProductsComponent;
  let fixture: ComponentFixture<ViewBusinessProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewBusinessProductsComponent]
    });
    fixture = TestBed.createComponent(ViewBusinessProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
