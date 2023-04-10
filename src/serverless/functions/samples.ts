import { type AWS } from '@serverless/typescript';
import { SAMPLE_ROUTES } from 'modules/samples/constants';
import { FUNCTIONS } from 'serverless/constants';
import { makeHandlerPath, makeRoutes } from 'shared/utils/handler';

export const samplesFnConfig: AWS['functions'] = {
  [FUNCTIONS.Samples.key]: {
    handler: makeHandlerPath(FUNCTIONS.Samples.name),
    events: makeRoutes(SAMPLE_ROUTES),
    environment: {
      /* Put here all the environment variables that you need */
    },
  },
};
