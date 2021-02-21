import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiddleComponent } from './riddle.component';
import {ActivatedRoute, Router} from '@angular/router';
import {SolutionAPIService} from '../services/solution-api.service';
import {AppConfigService} from '../services/app-config.service';
import {EscapeRoom} from '../model/escape-room';
import {Observable} from 'rxjs/internal/Observable';
import {of} from 'rxjs/internal/observable/of';

export class ActivatedRouteMock{
}

export class RouterMock{
}

export class SolutionAPIServiceMock{
  public initEscapeRoom(){
    return of(new EscapeRoom());

}
}

export class AppConfigServiceMock{
}


describe('RiddleComponent', () => {
  let component: RiddleComponent;
  let fixture: ComponentFixture<RiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiddleComponent ],
        providers: [
          { provide: AppConfigService,  useClass: AppConfigServiceMock },
          { provide: ActivatedRoute,  useClass: ActivatedRouteMock },
          { provide: Router,  useClass: RouterMock },
          { provide: SolutionAPIService,  useClass: SolutionAPIServiceMock },
        ]
    }
      )
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
