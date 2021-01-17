import { SolutionResult } from './solution-result';

describe('SolutionResult', () => {
  it('should create an instance', () => {
    expect(new SolutionResult("This is the hint",true,false)).toBeTruthy();
  });
});
