import {Riddle} from './riddle';


export class SolutionResult {
  correct: boolean;
  riddle: Riddle;

  constructor(correct: boolean, riddle: Riddle) {
    this.correct = correct;
    this.riddle = riddle;
  }
}
