import { makeSlsVariable } from 'serverless/helpers';

describe('makeSlsVariable', () => {
  it('should create a single variable correctly', () => {
    const expectedResult = `\${self:service}`;
    const result = makeSlsVariable('self:service');

    expect(result).toEqual(expectedResult);
  });

  it('should create multiple variables correctly', () => {
    const expectedResult = `\${opt:stage, 'dev'}`;
    const result = makeSlsVariable(`opt:stage, 'dev'`);

    expect(result).toEqual(expectedResult);
  });

  it('should return an empty string when argument passed is empty string', () => {
    const expectedResult = '';
    const result = makeSlsVariable('');

    expect(result).toEqual(expectedResult);
  });
});
