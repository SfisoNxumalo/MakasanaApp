import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWebsiteDetailsComponent } from './add-website-details.component';

describe('AddWebsiteDetailsComponent', () => {
  let component: AddWebsiteDetailsComponent;
  let fixture: ComponentFixture<AddWebsiteDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddWebsiteDetailsComponent]
    });
    fixture = TestBed.createComponent(AddWebsiteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
