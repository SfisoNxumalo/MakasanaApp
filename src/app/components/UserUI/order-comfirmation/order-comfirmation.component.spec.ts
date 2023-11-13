import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderComfirmationComponent } from './order-comfirmation.component';

describe('OrderComfirmationComponent', () => {
  let component: OrderComfirmationComponent;
  let fixture: ComponentFixture<OrderComfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderComfirmationComponent]
    });
    fixture = TestBed.createComponent(OrderComfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
