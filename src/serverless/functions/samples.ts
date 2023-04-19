import { type AWS } from '@serverless/typescript';
import { SAMPLE_ROUTES } from 'modules/samples/constants';
import { FUNCTIONS } from 'serverless/constants';
import { makeHandlerPath, makeRoutes } from 'shared/utils/handler';

export const samplesFnConfig: AWS['functions'] = {
  [FUNCTIONS.Samples.Ref]: {
    handler: makeHandlerPath(FUNCTIONS.Samples.Name),
    events: makeRoutes(SAMPLE_ROUTES),
    environment: {
      /* Put here all the environment variables that you need */
    },
  },
};
