import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SolutionAPIService } from '../services/solution-api.service';
import { SolutionProposal } from '../model/solution-proposal';
import { SolutionResult } from '../model/solution-result';

@Component({
  selector: 'app-riddle',
  templateUrl: './riddle.component.html',
  styleUrls: ['./riddle.component.scss'],
})
export class RiddleComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private solutionService: SolutionAPIService
  ) {}

  codeFormControl = new FormControl('', [Validators.required]);
  public resultFormControl = new FormControl();
  public showImage = false;
  public showTicker = false;
  public showFirstRiddle = true;
  public pieces = [
    { name: 'Piece A', path: 'assets/pdfs/A.pdf' },
    { name: 'Piece B', path: 'assets/pdfs/B.pdf' },
    { name: 'Piece C', path: 'assets/pdfs/C.pdf' },
    { name: 'Piece D', path: 'assets/pdfs/D.pdf' },
    { name: 'Piece E', path: 'assets/pdfs/E.pdf' },
  ];
  ngOnInit(): void {}

  proposeSolution(): void {
    console.log(this.codeFormControl.value);
    this.solutionService
      .proposeSolution(new SolutionProposal(this.codeFormControl.value))
      .subscribe((data: SolutionResult) => {
        console.log(data);
        console.log(data.hint);
        if (data.correct) {
          this.resultFormControl.setValue(data.hint);
          this.showImage = data.showImage;
          this.showTicker = data.showTicker;
          this.showFirstRiddle = false;
        } else {
          this.codeFormControl.setErrors({ incorrect: true });
        }
      });
  }
}
