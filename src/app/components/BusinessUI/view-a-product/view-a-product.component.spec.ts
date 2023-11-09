import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAProductComponent } from './view-a-product.component';

describe('ViewAProductComponent', () => {
  let component: ViewAProductComponent;
  let fixture: ComponentFixture<ViewAProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAProductComponent]
    });
    fixture = TestBed.createComponent(ViewAProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
