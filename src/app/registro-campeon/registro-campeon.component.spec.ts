import { async, ComponentFixture, TestBed } from '@angular/core/testing';



import { RegistroCampeonComponent } from './registro-campeon.component';

describe('RegistroCampeonComponent', () => {
  let component: RegistroCampeonComponent;
  let fixture: ComponentFixture<RegistroCampeonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroCampeonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroCampeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
