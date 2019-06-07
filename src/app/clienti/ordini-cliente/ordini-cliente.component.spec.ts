import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdiniClienteComponent } from './ordini-cliente.component';

describe('OrdiniClienteComponent', () => {
  let component: OrdiniClienteComponent;
  let fixture: ComponentFixture<OrdiniClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdiniClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdiniClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
