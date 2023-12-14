import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessTopComponent } from './business-top.component';

describe('BusinessTopComponent', () => {
  let component: BusinessTopComponent;
  let fixture: ComponentFixture<BusinessTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessTopComponent]
    });
    fixture = TestBed.createComponent(BusinessTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
