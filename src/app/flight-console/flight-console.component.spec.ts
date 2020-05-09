import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightConsoleComponent } from './flight-console.component';

describe('FlightConsoleComponent', () => {
  let component: FlightConsoleComponent;
  let fixture: ComponentFixture<FlightConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlightConsoleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
