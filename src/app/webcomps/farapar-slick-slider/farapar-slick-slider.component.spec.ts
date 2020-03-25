import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaraparSlickSliderComponent } from './farapar-slick-slider.component';

describe('FaraparSlickSliderComponent', () => {
  let component: FaraparSlickSliderComponent;
  let fixture: ComponentFixture<FaraparSlickSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaraparSlickSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaraparSlickSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
