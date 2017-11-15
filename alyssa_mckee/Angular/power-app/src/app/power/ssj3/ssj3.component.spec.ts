import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ssj3Component } from './ssj3.component';

describe('Ssj3Component', () => {
  let component: Ssj3Component;
  let fixture: ComponentFixture<Ssj3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ssj3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ssj3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
