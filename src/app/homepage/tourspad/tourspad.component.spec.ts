import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourspadComponent } from './tourspad.component';

describe('TourspadComponent', () => {
  let component: TourspadComponent;
  let fixture: ComponentFixture<TourspadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourspadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourspadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
