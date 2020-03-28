import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecJobComponent } from './sec-job.component';

describe('SecJobComponent', () => {
  let component: SecJobComponent;
  let fixture: ComponentFixture<SecJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
