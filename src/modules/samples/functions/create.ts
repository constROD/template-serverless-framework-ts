import middy from '@middy/core';
import { SAMPLE_ROUTES } from 'modules/samples/constants';
import { sampleService } from 'modules/samples/service';
import { createSampleSchema } from 'modules/samples/validations';
import { type APIGatewayEventType } from 'shared/types/http';
import { makeAPIResponse } from 'shared/utils/http';
import type swaggerJSDoc from 'swagger-jsdoc';

const handler = middy(async (event: APIGatewayEventType) => {
  const validated = createSampleSchema.safeParse(event.body);

  if (!validated.success)
    return makeAPIResponse({ type: 'BadRequest', error: { errors: validated.error } });

  const records = await sampleService.create(validated.data);

  return makeAPIResponse({ type: 'Created', data: { records } });
});

const docs: swaggerJSDoc.Paths = {
  [SAMPLE_ROUTES.createSample.path]: {
    post: {
      description: 'Create a sample.',
      tags: ['Samples'],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'Name of the sample.',
                },
                description: {
                  type: 'string',
                  description: 'Description of the sample',
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: 'Sample created.',
        },
      },
    },
  },
};

export const createSample = { handler, docs };
