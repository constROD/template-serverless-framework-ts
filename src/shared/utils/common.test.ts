import { transformToPascal } from './common';

describe('transformToPascal', () => {
  it('should transform a kebab-case string to PascalCase', () => {
    const input = 'hello-world';
    const expectedResult = 'HelloWorld';

    const result = transformToPascal(input);
    expect(result).toEqual(expectedResult);
  });

  it('should transform a snake_case string to PascalCase', () => {
    const input = 'hello_world';

    const result = transformToPascal(input);
    const expectedResult = 'HelloWorld';

    expect(result).toEqual(expectedResult);
  });

  it('should transform a camelCase string to PascalCase', () => {
    const input = 'helloWorld';

    const result = transformToPascal(input);
    const expectedResult = 'HelloWorld';

    expect(result).toEqual(expectedResult);
  });

  it('should transform a space separated string to PascalCase', () => {
    const input = 'hello world';

    const result = transformToPascal(input);
    const expectedResult = 'HelloWorld';

    expect(result).toEqual(expectedResult);
  });

  it('should transform a mixed string to PascalCase', () => {
    const input = 'hello-world_this is an_example';

    const result = transformToPascal(input);
    const expectedResult = 'HelloWorldThisIsAnExample';

    expect(result).toEqual(expectedResult);
  });
});
