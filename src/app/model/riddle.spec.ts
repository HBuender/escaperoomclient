import { Riddle } from './riddle';
import {ImageContent} from './image-content';

describe('Riddle', () => {
  it('should create an instance', () => {
    expect(new Riddle('', '', new ImageContent('', '', ''))).toBeTruthy();
  });
});
