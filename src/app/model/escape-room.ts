import {Riddle} from './riddle';
import {ImageContent} from './image-content';
import {Hint} from './hint';
import {StaticTextContent} from './static-text-content';

export class EscapeRoom {

  initialRiddle: Riddle;
  picture: ImageContent;
  hints: Hint[];
  staticTextContent: StaticTextContent;

  // tslint:disable-next-line:max-line-length
  constructor(riddle: Riddle, picture: ImageContent, hints: Hint[], staticTextContent: StaticTextContent) {
    this.initialRiddle = riddle;
    this.picture = picture;
    this.hints = hints;
    this.staticTextContent = staticTextContent;
  }
}
