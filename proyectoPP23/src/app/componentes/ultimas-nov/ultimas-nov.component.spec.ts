import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimasNovComponent } from './ultimas-nov.component';

describe('UltimasNovComponent', () => {
  let component: UltimasNovComponent;
  let fixture: ComponentFixture<UltimasNovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UltimasNovComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UltimasNovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
