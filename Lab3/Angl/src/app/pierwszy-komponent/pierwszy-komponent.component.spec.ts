import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PierwszyKomponentComponent } from './pierwszy-komponent.component';

describe('PierwszyKomponentComponent', () => {
  let component: PierwszyKomponentComponent;
  let fixture: ComponentFixture<PierwszyKomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PierwszyKomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PierwszyKomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
