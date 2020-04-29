import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaHistoricoProfissionalComponent } from './tela-historico-profissional.component';

describe('TelaHistoricoProfissionalComponent', () => {
  let component: TelaHistoricoProfissionalComponent;
  let fixture: ComponentFixture<TelaHistoricoProfissionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaHistoricoProfissionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaHistoricoProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
