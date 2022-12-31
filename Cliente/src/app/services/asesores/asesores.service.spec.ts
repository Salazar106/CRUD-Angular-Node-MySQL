import { TestBed } from '@angular/core/testing';

import { AsesoresService } from './asesores.service';

describe('AsesoresService', () => {
  let service: AsesoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsesoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
