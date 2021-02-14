
export class SolutionResult {
  correct: boolean;
  riddle: string ;
  riddleNumber: string;
  imageURL: string;

  constructor(correct: boolean, riddle: string, riddleNumber: string, imageURL: string) {
    this.correct = correct;
    this.riddle = riddle;
    this.riddleNumber = riddleNumber;
    this.imageURL = imageURL;
  }
}
