import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotePadComponent } from './quote-pad.component';

describe('QuotePadComponent', () => {
  let component: QuotePadComponent;
  let fixture: ComponentFixture<QuotePadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotePadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotePadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
