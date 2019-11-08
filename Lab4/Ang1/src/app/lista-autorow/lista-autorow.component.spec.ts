import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAutorowComponent } from './lista-autorow.component';

describe('ListaAutorowComponent', () => {
  let component: ListaAutorowComponent;
  let fixture: ComponentFixture<ListaAutorowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAutorowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAutorowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
