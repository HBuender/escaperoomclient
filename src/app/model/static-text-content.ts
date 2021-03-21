export class StaticTextContent {

  escapeRoomTitle: string;
  escapeRoomDescription: string;
  hintTitle: string;
  hintDescription: string;
  areYouReadyTitle: string;
  areYourReadyDescription: string;

  constructor(escapeRoomTitle: string,  escapeRoomDescription: string, hintTitle: string,  hintDescription: string,  areYouReadyTitle: string,  areYourReadyDescription: string) {
    this.escapeRoomTitle = escapeRoomTitle;
    this.escapeRoomDescription = escapeRoomDescription;
    this.hintTitle = hintTitle;
    this.hintDescription = hintDescription;
    this.areYouReadyTitle = areYouReadyTitle;
    this.areYourReadyDescription = areYourReadyDescription;
  }
}
