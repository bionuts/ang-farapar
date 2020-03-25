import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconicTextboxComponent } from './iconic-textbox.component';

describe('IconicTextboxComponent', () => {
  let component: IconicTextboxComponent;
  let fixture: ComponentFixture<IconicTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconicTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconicTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
