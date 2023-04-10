/* eslint-disable import/no-import-module-exports */
import { type AWS } from '@serverless/typescript';
import { AWS_REGION, LAMBDA_TIMEOUT, SERVERLESS, SERVICE_NAME } from 'serverless/constants';
import { custom } from 'serverless/custom';
import { environment } from 'serverless/environments';
import { functions } from 'serverless/functions';
import { iam } from 'serverless/iam';
import { resources } from 'serverless/resources';

const serverlessConfiguration: AWS = {
  service: SERVICE_NAME,
  frameworkVersion: '3',
  provider: {
    name: 'aws',
    region: AWS_REGION,
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
    environment,
    iam,
  },
  functions,
  custom,
  resources,
  package: { individually: true, excludeDevDependencies: true },
  plugins: [
    'serverless-esbuild',
    'serverless-deployment-bucket',
    'serverless-iam-roles-per-function',
    'serverless-offline',
  ],
};

module.exports = serverlessConfiguration;
