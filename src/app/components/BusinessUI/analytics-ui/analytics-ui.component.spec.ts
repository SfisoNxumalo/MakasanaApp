import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsUiComponent } from './analytics-ui.component';

describe('AnalyticsUiComponent', () => {
  let component: AnalyticsUiComponent;
  let fixture: ComponentFixture<AnalyticsUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalyticsUiComponent]
    });
    fixture = TestBed.createComponent(AnalyticsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
