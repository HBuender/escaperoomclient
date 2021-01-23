
export class SolutionResult {
  hint: string;
  showImage:boolean;
  correct:boolean;
  showTicker:boolean;

  constructor(hint:string, showImage:boolean, correct:boolean, showTicker:boolean) {
    this.hint=hint;
    this.showImage=showImage;
    this.correct=correct;
    this.showTicker=showTicker;
  }
}
