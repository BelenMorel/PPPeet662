import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatEstBachillerComponent } from './mat-est-bachiller.component';

describe('MatEstBachillerComponent', () => {
  let component: MatEstBachillerComponent;
  let fixture: ComponentFixture<MatEstBachillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatEstBachillerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatEstBachillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
