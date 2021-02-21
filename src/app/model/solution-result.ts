
export class SolutionResult {
  correct: boolean;
  riddle: string ;
  titleRiddle: string;
  imageURL: string;

  constructor(correct: boolean, riddle: string, titleRiddle: string, imageURL: string) {
    this.correct = correct;
    this.riddle = riddle;
    this.titleRiddle = titleRiddle;
    this.imageURL = imageURL;
  }
}
