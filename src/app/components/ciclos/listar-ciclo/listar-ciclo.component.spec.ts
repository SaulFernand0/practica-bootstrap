import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCicloComponent } from './listar-ciclo.component';

describe('ListarCicloComponent', () => {
  let component: ListarCicloComponent;
  let fixture: ComponentFixture<ListarCicloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCicloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCicloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
