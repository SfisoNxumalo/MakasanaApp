import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewProductComponent } from './user-view-product.component';

describe('UserViewProductComponent', () => {
  let component: UserViewProductComponent;
  let fixture: ComponentFixture<UserViewProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserViewProductComponent]
    });
    fixture = TestBed.createComponent(UserViewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
