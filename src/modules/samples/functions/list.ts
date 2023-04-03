import middy from '@middy/core';
import { SAMPLE_ROUTES } from 'modules/samples/constants';
import { sampleService } from 'modules/samples/services';
import { makeAPIResponse } from 'shared/utils/http';
import type swaggerJSDoc from 'swagger-jsdoc';

/* Handler */
const handler = middy(async () => {
  const { records, totalRecords } = await sampleService.list();

  return makeAPIResponse({
    type: 'Success',
    data: { records, totalRecords },
  });
});

/* Swagger */
const docs: swaggerJSDoc.Paths = {
  [SAMPLE_ROUTES.listOfSamples.path]: {
    get: {
      description: 'Get list of samples.',
      tags: ['Samples'],
      responses: {
        200: {
          description: 'List of samples.',
        },
      },
    },
  },
};

export const listOfSamples = { handler, docs };
