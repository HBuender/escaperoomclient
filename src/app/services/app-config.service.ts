import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppConfigService {
  // @ts-ignore
  private appConfig;

  constructor(private injector: Injector) { }

  loadAppConfig() {
    const http: HttpClient = this.injector.get(HttpClient);

    return http.get('/assets/app-config.json')
      .toPromise()
      .then(data => {
        this.appConfig = data;
      });
  }

  // tslint:disable-next-line:typedef
  get config() {
    return this.appConfig;
  }
}
