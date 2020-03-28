import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InFlightsComponent } from './in-flights.component';

describe('InFlightsComponent', () => {
  let component: InFlightsComponent;
  let fixture: ComponentFixture<InFlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InFlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
