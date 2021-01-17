
export class SolutionResult {
  hint: string;
  showImage:boolean;
  correct:boolean;

  constructor(hint:string, showImage:boolean, correct:boolean) {
    this.hint=hint;
    this.showImage=showImage;
    this.correct=correct;
  }
}
