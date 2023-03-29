// eslint-disable-next-line import/no-extraneous-dependencies
import { type AWS } from '@serverless/typescript';
import { SAMPLE_ROUTES } from 'modules/samples/constants';
import { FUNCTIONS } from 'serverless/constants';
import { makeHandlerPath, makeRoutes } from 'shared/utils/handler';

export const samplesFnConfig: AWS['functions'] = {
  [FUNCTIONS.Samples]: {
    handler: makeHandlerPath(FUNCTIONS.Samples),
    events: makeRoutes(SAMPLE_ROUTES),
    environment: {
      /* Put here all the environment variables that you need */
    },
  },
};
