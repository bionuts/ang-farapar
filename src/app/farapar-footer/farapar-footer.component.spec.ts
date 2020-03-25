import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaraparFooterComponent } from './farapar-footer.component';

describe('FaraparFooterComponent', () => {
  let component: FaraparFooterComponent;
  let fixture: ComponentFixture<FaraparFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaraparFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaraparFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
