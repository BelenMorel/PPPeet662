import { TestBed } from '@angular/core/testing';

import { SeccBienvenidaService } from './secc-bienvenida.service';

describe('SeccBienvenidaService', () => {
  let service: SeccBienvenidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeccBienvenidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
