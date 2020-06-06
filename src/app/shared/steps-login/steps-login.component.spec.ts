import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsLoginComponent } from './steps-login.component';

describe('StepsLoginComponent', () => {
  let component: StepsLoginComponent;
  let fixture: ComponentFixture<StepsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
