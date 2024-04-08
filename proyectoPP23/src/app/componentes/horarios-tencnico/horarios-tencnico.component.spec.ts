import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariosTencnicoComponent } from './horarios-tencnico.component';

describe('HorariosTencnicoComponent', () => {
  let component: HorariosTencnicoComponent;
  let fixture: ComponentFixture<HorariosTencnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorariosTencnicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HorariosTencnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
