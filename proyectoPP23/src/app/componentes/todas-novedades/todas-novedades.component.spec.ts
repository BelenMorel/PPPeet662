import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodasNovedadesComponent } from './todas-novedades.component';

describe('TodasNovedadesComponent', () => {
  let component: TodasNovedadesComponent;
  let fixture: ComponentFixture<TodasNovedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodasNovedadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodasNovedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
