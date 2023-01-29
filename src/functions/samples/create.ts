import middy from '@middy/core';
import { APIGatewayProxyEventV2 } from 'aws-lambda';
import { sampleService } from 'modules/samples/service';
import { CreateSample } from 'modules/samples/types';
import { createSampleSchema } from 'modules/samples/validations';
import { APIResponseTypes } from 'shared/constants/api';
import { createAPIResponse } from 'shared/helpers/api';
import { validationMiddleware } from 'shared/middlewares/validation';
import { APIRequest } from 'shared/types/api';

/**
 * @openapi
 * /pipelines:
 *   post:
 *     description: Create a pipeline.
 *     tags:
 *       - Pipelines
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the pipeline.
 *               description:
 *                 type: string
 *                 description: Description of the pipeline
 *     responses:
 *       201:
 *         description: Pipeline created.
 */

export const createSample = middy(async (event: APIGatewayProxyEventV2) => {
  const { custom } = event as APIGatewayProxyEventV2 & {
    custom: APIRequest<CreateSample>;
  };

  const records = await sampleService.create(custom.request);

  return createAPIResponse({ type: APIResponseTypes.Created, response: { records } });
}).use(
  validationMiddleware({
    type: ['body'],
    validatorSchema: createSampleSchema,
  })
);
