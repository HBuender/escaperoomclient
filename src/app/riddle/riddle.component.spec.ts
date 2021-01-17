import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiddleComponent } from './riddle.component';
import {ActivatedRoute, Router} from '@angular/router';
import {SolutionAPIService} from '../services/solution-api.service';

export class ActivatedRouteMock{
}

export class RouterMock{
}

export class SolutionAPIServiceMock{
}


describe('RiddleComponent', () => {
  let component: RiddleComponent;
  let fixture: ComponentFixture<RiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiddleComponent ],
        providers: [
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
