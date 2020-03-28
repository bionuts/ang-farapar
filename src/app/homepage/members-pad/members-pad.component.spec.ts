import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersPadComponent } from './members-pad.component';

describe('MembersPadComponent', () => {
  let component: MembersPadComponent;
  let fixture: ComponentFixture<MembersPadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersPadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
