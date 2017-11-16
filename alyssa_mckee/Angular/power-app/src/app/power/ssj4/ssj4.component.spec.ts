import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ssj4Component } from './ssj4.component';

describe('Ssj4Component', () => {
  let component: Ssj4Component;
  let fixture: ComponentFixture<Ssj4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ssj4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ssj4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
