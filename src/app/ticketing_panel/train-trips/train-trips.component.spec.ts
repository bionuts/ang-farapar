import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainTripsComponent } from './train-trips.component';

describe('TrainTripsComponent', () => {
  let component: TrainTripsComponent;
  let fixture: ComponentFixture<TrainTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
