import { TestBed } from '@angular/core/testing';

import { SolutionAPIService } from './solution-api.service';
import {AppConfigService} from './app-config.service';
import {HttpClient} from '@angular/common/http';

export class AppConfigServiceMock{
  config(){[]}
}
export class HttpClientMock{
  config(){[]}
}

describe('SolutionAPIService', () => {
  let service: SolutionAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AppConfigService,  useClass: AppConfigServiceMock },
        {provide: HttpClient,  useClass: HttpClientMock },
      ]
    });
    service = TestBed.inject(SolutionAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
