import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariosBachillerComponent } from './horarios-bachiller.component';

describe('HorariosBachillerComponent', () => {
  let component: HorariosBachillerComponent;
  let fixture: ComponentFixture<HorariosBachillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorariosBachillerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HorariosBachillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
