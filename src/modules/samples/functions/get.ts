import middy from '@middy/core';
import { SAMPLE_ROUTES } from 'modules/samples/constants';
import { sampleService } from 'modules/samples/service';
import { getSampleSchema } from 'modules/samples/validations';
import { type APIGatewayEventType } from 'shared/types/http';
import { makeAPIResponse } from 'shared/utils/http';
import type swaggerJSDoc from 'swagger-jsdoc';

const handler = middy(async (event: APIGatewayEventType) => {
  const validated = getSampleSchema.safeParse(event.pathParameters);

  if (!validated.success)
    return makeAPIResponse({ type: 'BadRequest', error: { errors: validated.error } });

  const records = await sampleService.get(validated.data.id);

  return makeAPIResponse({ type: 'Success', data: { records } });
});

const docs: swaggerJSDoc.Paths = {
  [SAMPLE_ROUTES.getSample.path]: {
    get: {
      description: 'Get a sample by {id}.',
      tags: ['Samples'],
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          schema: {
            type: 'string',
            format: 'uuid',
          },
        },
      ],
      responses: {
        200: {
          description: 'A single sample.',
        },
      },
    },
  },
};

export const getSample = { handler, docs };
