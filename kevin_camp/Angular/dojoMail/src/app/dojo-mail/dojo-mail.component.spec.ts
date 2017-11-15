import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DojoMailComponent } from './dojo-mail.component';

describe('DojoMailComponent', () => {
  let component: DojoMailComponent;
  let fixture: ComponentFixture<DojoMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DojoMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DojoMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
