import middy from '@middy/core';
import { SAMPLE_ROUTES } from 'modules/samples/constants';
import { sampleService } from 'modules/samples/service';
import { archiveSampleSchema } from 'modules/samples/validations';
import { type APIGatewayEventType } from 'shared/types/http';
import { makeAPIResponse } from 'shared/utils/http';
import type swaggerJSDoc from 'swagger-jsdoc';

/* Handler */
const handler = middy(async (event: APIGatewayEventType) => {
  const validated = archiveSampleSchema.safeParse(event.pathParameters);

  if (!validated.success)
    return makeAPIResponse({ type: 'BadRequest', error: { errors: validated.error } });

  const records = await sampleService.archive([validated.data.id]);

  return makeAPIResponse({ type: 'Archived', data: { records } });
});

/* Swagger */
const docs: swaggerJSDoc.Paths = {
  [SAMPLE_ROUTES.archiveSample.path]: {
    delete: {
      description: 'Archive a sample by {id}.',
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
          description: 'Sample archived.',
        },
      },
    },
  },
};

export const archiveSample = { handler, docs };
