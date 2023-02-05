import middy from '@middy/core';
import { APIGatewayProxyEventV2 } from 'aws-lambda';
import { sampleService } from 'modules/samples/service';
import { UpdateSample } from 'modules/samples/types';
import { updateSampleSchema } from 'modules/samples/validations';
import { APIResponseTypes } from 'shared/constants/api';
import { createAPIResponse } from 'shared/helpers/api';
import { validationMiddleware } from 'shared/middlewares/validation';
import { APIRequest } from 'shared/types/api';

/**
 * @openapi
 * /samples/{id}:
 *   put:
 *     description: Update a sample by {id}.
 *     tags:
 *       - Samples
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the sample.
 *                 default: string (optional)
 *               description:
 *                 type: string
 *                 description: Description of the sample.
 *                 default: string (optional)
 *     responses:
 *       200:
 *         description: Sample updated.
 */

export const updateSample = middy(async (event: APIGatewayProxyEventV2) => {
  const { custom } = event as APIGatewayProxyEventV2 & {
    custom: APIRequest<UpdateSample>;
  };

  const { id, ...request } = custom.request;

  const records = await sampleService.update(id, request);

  return createAPIResponse({ type: APIResponseTypes.Updated, response: { records } });
}).use(
  validationMiddleware({
    type: ['path', 'body'],
    validatorSchema: updateSampleSchema,
  })
);
