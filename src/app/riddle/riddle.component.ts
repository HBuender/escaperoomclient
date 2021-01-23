import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SolutionAPIService} from '../services/solution-api.service';
import {SolutionProposal} from '../model/solution-proposal';
import {SolutionResult} from '../model/solution-result';

@Component({
  selector: 'app-riddle',
  templateUrl: './riddle.component.html',
  styleUrls: ['./riddle.component.scss']
})
export class RiddleComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               private router: Router,
               private solutionService: SolutionAPIService) {
  }

  codeFormControl = new FormControl('', [
    Validators.required,
  ]);
  resultFormControl= new FormControl();
  showImage=false;
  showTicker=false;
  showFirstRiddle=true;
  ngOnInit(): void {
  }

  proposeSolution(): void {
    console.log(this.codeFormControl.value);
    this.solutionService.proposeSolution(new SolutionProposal(this.codeFormControl.value)).subscribe((data: SolutionResult) => {
      console.log(data);
      console.log(data.hint);
      if(data.correct){
        this.resultFormControl.setValue( data.hint);
        this.showImage = data.showImage;
        this.showTicker=data.showTicker;
        this.showFirstRiddle=false;
      }else{
        this.codeFormControl.setErrors({'incorrect':true});
      }
    });;
  }
}
