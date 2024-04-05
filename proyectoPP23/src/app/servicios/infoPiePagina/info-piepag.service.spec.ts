import { TestBed } from '@angular/core/testing';

import { InfoPiepagService } from './info-piepag.service';

describe('InfoPiepagService', () => {
  let service: InfoPiepagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoPiepagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
