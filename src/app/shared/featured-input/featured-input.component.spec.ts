import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedInputComponent } from './featured-input.component';

describe('FeaturedInputComponent', () => {
  let component: FeaturedInputComponent;
  let fixture: ComponentFixture<FeaturedInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
