import { TestBed } from '@angular/core/testing';

import { TodasNovService } from './todas-nov.service';

describe('TodasNovService', () => {
  let service: TodasNovService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodasNovService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
