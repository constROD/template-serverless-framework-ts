import { makeSwaggerPaths } from 'shared/utils/swagger';
import type swaggerJSDoc from 'swagger-jsdoc';

describe('makeSwaggerPaths', () => {
  it('should combine swagger paths correctly', () => {
    const docsArr: swaggerJSDoc.Paths[] = [
      {
        '/path1': {
          get: {
            summary: 'Get path1',
            responses: {
              200: {
                description: 'OK',
              },
            },
          },
        },
      },
      {
        '/path1': {
          post: {
            summary: 'Post path1',
            responses: {
              201: {
                description: 'Created',
              },
            },
          },
        },
      },
      {
        '/path2': {
          get: {
            summary: 'Get path2',
            responses: {
              200: {
                description: 'OK',
              },
            },
          },
        },
      },
    ];

    const result = makeSwaggerPaths(docsArr);
    const expectedResult: swaggerJSDoc.Paths = {
      '/path1': {
        get: {
          summary: 'Get path1',
          responses: {
            200: {
              description: 'OK',
            },
          },
        },
        post: {
          summary: 'Post path1',
          responses: {
            201: {
              description: 'Created',
            },
          },
        },
      },
      '/path2': {
        get: {
          summary: 'Get path2',
          responses: {
            200: {
              description: 'OK',
            },
          },
        },
      },
    };

    expect(result).toEqual(expectedResult);
  });

  it('should return an empty object when an empty array is passed', () => {
    const docsArr: swaggerJSDoc.Paths[] = [];

    const result = makeSwaggerPaths(docsArr);
    const expectedResult: swaggerJSDoc.Paths = {};

    expect(result).toEqual(expectedResult);
  });
});
