import {Component, OnInit, ViewChild} from '@angular/core';

import {FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SolutionAPIService} from '../services/solution-api.service';
import {SolutionProposal} from '../model/solution-proposal';
import {SolutionResult} from '../model/solution-result';
import {EscapeRoom} from '../model/escape-room';
import {AppConfigService} from '../services/app-config.service';
import {Riddle} from '../model/riddle';
import {ImageContent} from '../model/image-content';
import {Hint} from '../model/hint';


@Component({
  selector: 'app-riddle',
  templateUrl: './riddle.component.html',
  styleUrls: ['./riddle.component.scss'],
})
export class RiddleComponent implements OnInit {

  constructor( private environment: AppConfigService,  private route: ActivatedRoute,
               private router: Router,
               private solutionService: SolutionAPIService,
               private formBuilder: FormBuilder) {
    this.codeFormGroup = formBuilder.group({codeControlForm: this.codeFormControl});
  }

   codeFormGroup: FormGroup;

  codeFormControl = new FormControl('', [
    Validators.required,
  ]);

  showInfoText = true;
  showHints = true;
  showAreYouReady = true;
  mediaContent = '';
  titleRiddle = '1';
  riddle = `Could not be loaded`;
  titleImage = '';
  escapeRoomTitle = '';
  escapeRoomDescription = '';
  pieces: Hint[] = [];
  hintTitle = '';
  hintDescription = '';
  areYouReadyTitle = '';
  areYouReadyDescription = '';
  ngOnInit(): void {
    this.solutionService.initEscapeRoom().subscribe((data: EscapeRoom) => {
      console.log(data);
      this.titleRiddle = data.initialRiddle.titleRiddle;
      this.riddle = data.initialRiddle.riddle;
      this.titleImage = this.getImageURL(data.picture);
      data.hints.forEach(hint => this.pieces.push(new Hint(hint.title, this.environment.config.servicesBaseUrl + hint.url)));
      this.escapeRoomTitle = data.staticTextContent.escapeRoomTitle;
      this.escapeRoomDescription = data.staticTextContent.escapeRoomDescription;
      this.hintTitle = data.staticTextContent.hintTitle;
      this.hintDescription = data.staticTextContent.hintDescription;
      this.areYouReadyTitle = data.staticTextContent.areYouReadyTitle;
      this.areYouReadyDescription = data.staticTextContent.areYourReadyDescription;

  });
  }

  toggleShowInfoText(): void{
    this.showInfoText = !this.showInfoText;
  }

  toggleShowHints(): void{
    this.showHints = !this.showHints;
  }
  toggleShowFirstRiddle(): void{
    this.showHints = false;
    this.showInfoText = false;
    this.showAreYouReady = false;

  }

  proposeSolution(formData: any, formDirective: FormGroupDirective): void {
    console.log(this.codeFormControl.value);
    this.solutionService.proposeSolution(new SolutionProposal(this.codeFormControl.value)).subscribe((data: SolutionResult) => {
      console.log(data);
      if (data.correct){
        console.log(data.riddle);
        console.log(data.riddle.titleRiddle);
        this.riddle = data.riddle.riddle;
        this.titleRiddle = data.riddle.titleRiddle;
        this.codeFormControl.setValue('');
        if (data.riddle.imageContent != null){
            console.log(`<img src="` + this.environment.config.servicesBaseUrl + data.riddle.imageContent.imageURL + `"/>`);
            const imageURL = this.getImageURL(data.riddle.imageContent);
            const width = data.riddle.imageContent.width;
            const height = data.riddle.imageContent.height;
            this.mediaContent = `<img src="` + imageURL + `"  width="` + width + `"  height="` + height + `"/>`;
            console.log(this.mediaContent);
        }else {
          this.mediaContent = '';
        }
        formDirective.resetForm();
        this.codeFormGroup.reset();
      }else{
        this.codeFormControl.setErrors({incorrect: true});
      }
    });
  }
  private getImageURL(imageContent: ImageContent): string{
    return this.environment.config.servicesBaseUrl + imageContent.imageURL;
  }
}
