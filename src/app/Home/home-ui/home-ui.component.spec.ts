import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUiComponent } from './home-ui.component';

describe('HomeUiComponent', () => {
  let component: HomeUiComponent;
  let fixture: ComponentFixture<HomeUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeUiComponent]
    });
    fixture = TestBed.createComponent(HomeUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
