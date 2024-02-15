import { TestBed } from '@angular/core/testing';

import { ProcesorService } from './procesor.service';

describe('ProcesorService', () => {
  let service: ProcesorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcesorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
