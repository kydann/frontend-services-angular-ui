import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInspeccionComponent } from './add-inspeccion.component';

describe('AddInspeccionComponent', () => {
  let component: AddInspeccionComponent;
  let fixture: ComponentFixture<AddInspeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInspeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInspeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
