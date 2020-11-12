import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCicloComponent } from './update-ciclo.component';

describe('UpdateCicloComponent', () => {
  let component: UpdateCicloComponent;
  let fixture: ComponentFixture<UpdateCicloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCicloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCicloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
