import {ImageContent} from './image-content';

export class Riddle {

  riddle: string;
  titleRiddle: string;
  imageContent: ImageContent;

  constructor(riddle: string, titleRiddle: string, imageContent: ImageContent) {
    this.riddle = riddle;
    this.titleRiddle = titleRiddle;
    this.imageContent = imageContent;
  }


}
