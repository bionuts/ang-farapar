import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwComponent } from './pw.component';

describe('PwComponent', () => {
  let component: PwComponent;
  let fixture: ComponentFixture<PwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
