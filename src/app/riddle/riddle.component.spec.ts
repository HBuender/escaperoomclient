import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiddleComponent } from './riddle.component';
import {ActivatedRoute, Router} from '@angular/router';
import {SolutionAPIService} from '../services/solution-api.service';
import {AppConfigService} from '../services/app-config.service';
import {EscapeRoom} from '../model/escape-room';
import {Observable} from 'rxjs/internal/Observable';
import {of} from 'rxjs/internal/observable/of';
import {Riddle} from '../model/riddle';
import {ImageContent} from '../model/image-content';
import {StaticTextContent} from '../model/static-text-content';
import {FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

export class ActivatedRouteMock{
}

export class RouterMock{
}

export class SolutionAPIServiceMock{
  public initEscapeRoom(): Observable<EscapeRoom> {
    const imageContent = new ImageContent('', '', '');
    const riddle = new Riddle('Test', '1', imageContent );
    const staticTextContent = new StaticTextContent('', '', '', '', '', '');
    return of(new EscapeRoom(riddle, imageContent, [], staticTextContent));

}
}

export class AppConfigServiceMock{
  get config(): string {
    return '{baseConfigURL:"default"}';
  }
}
export class FormBuilderMock{

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
          { provide: FormBuilder,  useClass: FormBuilder },
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
