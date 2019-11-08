import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WyszukajComponent } from './wyszukaj.component';

describe('WyszukajComponent', () => {
  let component: WyszukajComponent;
  let fixture: ComponentFixture<WyszukajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WyszukajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WyszukajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
