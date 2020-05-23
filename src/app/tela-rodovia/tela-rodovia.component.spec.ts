import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaRodoviaComponent } from './tela-rodovia.component';

describe('TelaRodoviaComponent', () => {
  let component: TelaRodoviaComponent;
  let fixture: ComponentFixture<TelaRodoviaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaRodoviaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaRodoviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
