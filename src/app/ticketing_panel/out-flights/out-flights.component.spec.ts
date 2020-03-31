import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutFlightsComponent } from './out-flights.component';

describe('OutFlightsComponent', () => {
  let component: OutFlightsComponent;
  let fixture: ComponentFixture<OutFlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutFlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
