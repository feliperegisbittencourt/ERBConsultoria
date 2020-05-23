import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridServicosComponent } from './grid-servicos.component';

describe('GridServicosComponent', () => {
  let component: GridServicosComponent;
  let fixture: ComponentFixture<GridServicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridServicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
