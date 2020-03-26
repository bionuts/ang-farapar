import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTransComponent } from './user-trans.component';

describe('UserTransComponent', () => {
  let component: UserTransComponent;
  let fixture: ComponentFixture<UserTransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
