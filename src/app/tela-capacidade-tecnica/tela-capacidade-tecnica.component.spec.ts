import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCapacidadeTecnicaComponent } from './tela-capacidade-tecnica.component';

describe('TelaCapacidadeTecnicaComponent', () => {
  let component: TelaCapacidadeTecnicaComponent;
  let fixture: ComponentFixture<TelaCapacidadeTecnicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaCapacidadeTecnicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaCapacidadeTecnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
