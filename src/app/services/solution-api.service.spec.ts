import { TestBed } from '@angular/core/testing';

import { SolutionAPIService } from './solution-api.service';

describe('SolutionAPIService', () => {
  let service: SolutionAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolutionAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
