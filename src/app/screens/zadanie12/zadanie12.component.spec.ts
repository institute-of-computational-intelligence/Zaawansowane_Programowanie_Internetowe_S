import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Zadanie12Component } from './zadanie12.component';

describe('Zadanie12Component', () => {
  let component: Zadanie12Component;
  let fixture: ComponentFixture<Zadanie12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Zadanie12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Zadanie12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
