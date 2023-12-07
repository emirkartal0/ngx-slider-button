import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSliderButtonComponent } from './ngx-slider-button.component';

describe('NgxSliderButtonComponent', () => {
  let component: NgxSliderButtonComponent;
  let fixture: ComponentFixture<NgxSliderButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxSliderButtonComponent]
    });
    fixture = TestBed.createComponent(NgxSliderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
