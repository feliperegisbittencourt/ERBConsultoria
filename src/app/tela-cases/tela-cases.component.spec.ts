import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCasesComponent } from './tela-cases.component';

describe('TelaCasesComponent', () => {
  let component: TelaCasesComponent;
  let fixture: ComponentFixture<TelaCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
