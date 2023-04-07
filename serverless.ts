/* eslint-disable import/no-import-module-exports */
import { AWS_REGION, LAMBDA_TIMEOUT, SERVERLESS, SERVICE_NAME } from 'serverless/constants';
import { custom } from 'serverless/custom';
import { functions } from 'serverless/functions';
import { resources } from 'serverless/resources';

import type { AWS } from '@serverless/typescript';
import { environment } from 'serverless/environments';

const serverlessConfiguration: AWS = {
  service: SERVICE_NAME,
  frameworkVersion: '3',
  provider: {
    name: 'aws',
    stage: SERVERLESS.Stage,
    runtime: 'nodejs16.x',
    timeout: LAMBDA_TIMEOUT,
    deploymentBucket: {
      name: `${SERVICE_NAME}-${SERVERLESS.Stage}-${AWS_REGION}`,
    },
    httpApi: {
      name: `${SERVERLESS.ServiceName}-apis-${SERVERLESS.Stage}`,
      cors: {
        allowedOrigins: ['*'],
        allowedHeaders: ['*'],
        allowedMethods: ['*'],
      },
    },
    region: AWS_REGION,
    environment,
  },
  functions,
  custom,
  resources,
  package: { individually: true, excludeDevDependencies: true },
  plugins: [
    'serverless-esbuild',
    'serverless-offline',
    'serverless-iam-roles-per-function',
    'serverless-deployment-bucket',
  ],
};

module.exports = serverlessConfiguration;
