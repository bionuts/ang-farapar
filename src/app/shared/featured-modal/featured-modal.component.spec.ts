import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedModalComponent } from './featured-modal.component';

describe('FeaturedModalComponent', () => {
  let component: FeaturedModalComponent;
  let fixture: ComponentFixture<FeaturedModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
