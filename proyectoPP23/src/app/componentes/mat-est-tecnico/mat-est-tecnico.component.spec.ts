import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatEstTecnicoComponent } from './mat-est-tecnico.component';

describe('MatEstTecnicoComponent', () => {
  let component: MatEstTecnicoComponent;
  let fixture: ComponentFixture<MatEstTecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatEstTecnicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatEstTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
