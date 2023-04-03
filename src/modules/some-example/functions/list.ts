import middy from '@middy/core';
import { makeAPIResponse } from 'shared/utils/http';
import type swaggerJSDoc from 'swagger-jsdoc';
import { SOME_EXAMPLE_ROUTES } from '../constants';

/* Handler */
const handler = middy(async () =>
  makeAPIResponse({
    type: 'Success',
    data: { records: [], totalRecords: [] },
  })
);

/* Swagger */
const docs: swaggerJSDoc.Paths = {
  [SOME_EXAMPLE_ROUTES.listOfSomeExample.path]: {
    get: {
      description: 'Get list of some example.',
      tags: ['Some Examples'],
      responses: {
        200: {
          description: 'List of some example.',
        },
      },
    },
  },
};

export const listOfSomeExample = { handler, docs };
