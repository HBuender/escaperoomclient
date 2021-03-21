export class ImageContent {
  imageURL: string;
  width: string;
  height: string;

  constructor(imageURL: string, width: string, height: string) {
    this.imageURL = imageURL;
    this.width = width;
    this.height = height;
  }
}
