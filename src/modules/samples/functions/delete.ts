import middy from '@middy/core';
import { SAMPLE_ROUTES } from 'modules/samples/constants';
import { sampleService } from 'modules/samples/services';
import { deleteSampleSchema } from 'modules/samples/validations';
import { type APIGatewayEventType } from 'shared/types/http';
import { makeAPIResponse } from 'shared/utils/http';
import type swaggerJSDoc from 'swagger-jsdoc';

/* Handler */
const handler = middy(async (event: APIGatewayEventType) => {
  const validated = deleteSampleSchema.safeParse(event.pathParameters);

  if (!validated.success)
    return makeAPIResponse({ type: 'BadRequest', error: { errors: validated.error } });

  const records = await sampleService.delete([validated.data.id]);

  return makeAPIResponse({ type: 'Deleted', data: { records } });
});

/* Swagger */
const docs: swaggerJSDoc.Paths = {
  [SAMPLE_ROUTES.deleteSample.path]: {
    delete: {
      description: 'Delete a sample by {id}.',
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
          description: 'Sample deleted.',
        },
      },
    },
  },
};

export const deleteSample = { handler, docs };
