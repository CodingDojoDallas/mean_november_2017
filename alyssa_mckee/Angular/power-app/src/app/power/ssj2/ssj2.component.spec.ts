import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ssj2Component } from './ssj2.component';

describe('Ssj2Component', () => {
  let component: Ssj2Component;
  let fixture: ComponentFixture<Ssj2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ssj2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ssj2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
