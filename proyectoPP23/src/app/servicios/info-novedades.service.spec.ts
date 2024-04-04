import { TestBed } from '@angular/core/testing';

import { InfoNovedadesService } from './info-novedades.service';

describe('InfoNovedadesService', () => {
  let service: InfoNovedadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoNovedadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
