import middy from '@middy/core';
import { sampleService } from 'modules/samples/service';
import { APIResponseTypes } from 'shared/constants/api';
import { createAPIResponse } from 'shared/helpers/api';

/**
 * @openapi
 * /samples:
 *   get:
 *     description: Get list of samples.
 *     tags:
 *       - Sample
 *     responses:
 *       200:
 *         description: List of samples.
 */

export const listOfSamples = middy(async () => {
  const { records, totalRecords } = await sampleService.list();

  return createAPIResponse({
    type: APIResponseTypes.Success,
    response: { records, totalRecords },
  });
});
