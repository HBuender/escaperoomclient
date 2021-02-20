import { SolutionResult } from './solution-result';

describe('SolutionResult', () => {
  it('should create an instance', () => {
    expect(new SolutionResult(true, 'Bla', 'Blub', '')).toBeTruthy();
  });
});
