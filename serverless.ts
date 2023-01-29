import { custom } from 'serverless/custom';
import { environment } from 'serverless/environment';
import { functions } from 'serverless/functions';
import { resources } from 'serverless/resources';
import { DeploymentBucketName, LambdaTimeout, Serverless } from 'shared/constants/config';

import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'service-name',
  frameworkVersion: '3',
  provider: {
    name: 'aws',
    stage: Serverless.Stage,
    runtime: 'nodejs16.x',
    timeout: LambdaTimeout,
    deploymentBucket: {
      name: DeploymentBucketName,
    },
    environment,
    httpApi: {
      name: `${Serverless.ServiceName}-apis-${Serverless.Stage}`,
      cors: {
        allowedOrigins: ['*'],
        allowedHeaders: ['*'],
        allowedMethods: ['*'],
      },
    },
  },
  functions,
  custom,
  resources,
  package: { individually: true },
  plugins: [
    'serverless-esbuild',
    'serverless-offline',
    'serverless-iam-roles-per-function',
    'serverless-deployment-bucket',
  ],
};

module.exports = serverlessConfiguration;
