import { type AWS } from '@serverless/typescript';
import { SAMPLE_ROUTES } from 'modules/samples/constants';
import { FUNCTIONS } from 'serverless/constants';
import { transformToPascal } from 'shared/utils/commons';
import { makeHandlerPath, makeRoutes } from 'shared/utils/handler';

const SamplePascalCase = transformToPascal(FUNCTIONS.Samples);

export const samplesFnConfig: AWS['functions'] = {
  [SamplePascalCase]: {
    handler: makeHandlerPath(FUNCTIONS.Samples),
    events: makeRoutes(SAMPLE_ROUTES),
    environment: {
      /* Put here all the environment variables that you need */
    },
  },
};
