import { SolutionResult } from './solution-result';
import {Riddle} from './riddle';
import {ImageContent} from './image-content';

describe('SolutionResult', () => {
  it('should create an instance', () => {
    expect(new SolutionResult(true, new Riddle('Bla', 'Blub', new ImageContent('','','')))).toBeTruthy();
  });
});
