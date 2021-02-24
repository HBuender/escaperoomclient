import { Component, OnInit } from '@angular/core';

import {FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SolutionAPIService} from '../services/solution-api.service';
import {SolutionProposal} from '../model/solution-proposal';
import {SolutionResult} from '../model/solution-result';
import {EscapeRoom} from '../model/escape-room';
import {AppConfigService} from '../services/app-config.service';


@Component({
  selector: 'app-riddle',
  templateUrl: './riddle.component.html',
  styleUrls: ['./riddle.component.scss'],
})
export class RiddleComponent implements OnInit {

  constructor( private environment: AppConfigService,  private route: ActivatedRoute,
               private router: Router,
               private solutionService: SolutionAPIService) {
  }

  codeFormControl = new FormControl('', [
    Validators.required,
  ]);
  resultFormControl = new FormControl();
  showInfoText = true;
  showHints = true;
  showAreYouReady = true;
  mediaContent = '';
  titleRiddle = '1';
  riddle = `Could not be loaded`;
  public pieces = [
    { name: 'Hinweise Spieler 1', path: 'assets/pdfs/KV_Escaperoom_Player1.pdf' },
    { name: 'Hinweise Spieler 2', path: 'assets/pdfs/KV_Escaperoom_Player2.pdf' },
    { name: 'Hinweise Spieler 3', path: 'assets/pdfs/KV_Escaperoom_Player3.pdf' },
    { name: 'Hinweise Spieler 4', path: 'assets/pdfs/KV_Escaperoom_Player4.pdf' },
  ];
  ngOnInit(): void {
    this.solutionService.initEscapeRoom().subscribe((data: EscapeRoom) => {
      this.titleRiddle = data.titleRiddle;
      this.riddle = data.initialRiddle;
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

  proposeSolution(): void {
    console.log(this.codeFormControl.value);
    this.solutionService.proposeSolution(new SolutionProposal(this.codeFormControl.value)).subscribe((data: SolutionResult) => {
      console.log(data);
      console.log(data.riddle);
      console.log(data.titleRiddle);
      if (data.correct){
        this.riddle = data.riddle;
        this.titleRiddle = data.titleRiddle;
        this.codeFormControl.setValue('');
        if (data.imageURL != null){
            console.log(`<img src="` + this.environment.config.servicesBaseUrl + data.imageURL + `"/>`);
            this.mediaContent = `<img src="` + this.environment.config.servicesBaseUrl + data.imageURL + `"/>`;
        }else {
          this.mediaContent = '';
        }
      }else{
        this.codeFormControl.setErrors({incorrect: true});
      }
    });
  }
}
