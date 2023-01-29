import { samplesFnConfig } from './samples';

import { AWS } from '@serverless/typescript';
import { swaggerRoutes } from 'modules/swagger/routes';
import { Functions } from 'shared/constants/config';
import { createHandlerConfig, createRoutesConfig } from 'shared/helpers/lambda';

export const functions: AWS['functions'] = {
  [Functions.Swagger]: {
    handler: createHandlerConfig(Functions.Swagger),
    events: createRoutesConfig(swaggerRoutes),
    package: {
      patterns: ['src/functions/**/*.ts', 'src/modules/swagger/**/*.ts'],
    },
  },
  ...samplesFnConfig,
};
