import { EscapeRoom } from './escape-room';
import {Riddle} from './riddle';
import {ImageContent} from './image-content';
import {StaticTextContent} from './static-text-content';

describe('EscapeRoom', () => {
  it('should create an instance', () => {
    const image = new ImageContent('', '', '');
    const riddle = new Riddle('Test', 'Test Riddle', image);
    const staticTextContent = new StaticTextContent('', '', '', '', '', '');
    expect(new EscapeRoom(riddle, image, [] , staticTextContent )).toBeTruthy();
  });
});
