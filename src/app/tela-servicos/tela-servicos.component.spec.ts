import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaServicosComponent } from './tela-servicos.component';

describe('TelaServicosComponent', () => {
  let component: TelaServicosComponent;
  let fixture: ComponentFixture<TelaServicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaServicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
