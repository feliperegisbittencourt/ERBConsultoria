import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tela1HomeComponent } from './tela1-home.component';

describe('Tela1HomeComponent', () => {
  let component: Tela1HomeComponent;
  let fixture: ComponentFixture<Tela1HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tela1HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tela1HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
