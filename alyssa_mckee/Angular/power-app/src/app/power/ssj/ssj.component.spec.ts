import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsjComponent } from './ssj.component';

describe('SsjComponent', () => {
  let component: SsjComponent;
  let fixture: ComponentFixture<SsjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
