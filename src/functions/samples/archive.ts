import middy from '@middy/core';
import { APIGatewayProxyEventV2 } from 'aws-lambda';
import { sampleService } from 'modules/samples/service';
import { archiveSampleSchema } from 'modules/samples/validations';
import { APIResponseTypes } from 'shared/constants/api';
import { createAPIResponse } from 'shared/helpers/api';
import { validationMiddleware } from 'shared/middlewares/validation';
import { APIRequest } from 'shared/types/api';

/**
 * @openapi
 * /samples/{id}/archive:
 *   delete:
 *     description: Archive a pipeline by {id}.
 *     tags:
 *       - Samples
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Sample archived.
 */

export const archiveSample = middy(async (event: APIGatewayProxyEventV2) => {
  const { custom } = event as APIGatewayProxyEventV2 & {
    custom: APIRequest<{ id: string }>;
  };

  const { id } = custom.request;
  const records = await sampleService.archive([id]);

  return createAPIResponse({ type: APIResponseTypes.Archived, response: { records } });
}).use(
  validationMiddleware({
    type: ['path'],
    validatorSchema: archiveSampleSchema,
  })
);
