import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAssessoramentoComponent } from './tela-assessoramento.component';

describe('TelaAssessoramentoComponent', () => {
  let component: TelaAssessoramentoComponent;
  let fixture: ComponentFixture<TelaAssessoramentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaAssessoramentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaAssessoramentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
