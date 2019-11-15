import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Zadanie19Component } from './zadanie19.component';

describe('Zadanie19Component', () => {
  let component: Zadanie19Component;
  let fixture: ComponentFixture<Zadanie19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Zadanie19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Zadanie19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
