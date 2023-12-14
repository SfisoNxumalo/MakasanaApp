import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerComponentComponent } from './spinner-component.component';

describe('SpinnerComponentComponent', () => {
  let component: SpinnerComponentComponent;
  let fixture: ComponentFixture<SpinnerComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpinnerComponentComponent]
    });
    fixture = TestBed.createComponent(SpinnerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
