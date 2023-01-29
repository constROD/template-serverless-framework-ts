import { sampleRoutes } from 'functions/samples/handler';
import { Functions } from 'shared/constants/config';
import { createHandlerConfig, createRoutesConfig } from 'shared/helpers/lambda';
import { FunctionsConfig } from 'src/serverless/types';

export const samplesFnConfig: FunctionsConfig = {
  [Functions.Samples]: {
    handler: createHandlerConfig(Functions.Samples),
    events: createRoutesConfig(sampleRoutes),
    environment: {
      /* Put here all the environment variables that you need */
    },
  },
  /** 
  * * For the functions that need to access the S3 bucket, you need to add the following code:
  
  [Functions.Sample]: {
    handler: createHandlerPath(Functions.Sample),
    events: createRoutes(sampleRoutes),
    environment: {
      [Env.BUCKET]: custom(Customs.Bucket),
    },
    iamRoleStatements: [
      {
        Effect: 'Allow',
        Action: ['s3:PutObject', 's3:GetObject', 's3:DeleteObject'],
        Resource: fnJoin('', ['arn:aws:s3:::', custom(Customs.Bucket), '/*']),
      },
    ],
  },

  * * For the functions that need to access the DynamoDB table, you need to add the following code:
  [Functions.Sample]: {
    handler: createHandlerPath(Functions.Sample),
    events: createRoutes(sampleRoutes),
    environment: {
      [Env.DynamoTable]: resourceName(Resources.Sample),
    },
    iamRoleStatements: [
      {
        Effect: 'Allow',
        Action: [
          'dynamodb:BatchGetItem',
          'dynamodb:BatchWriteItem',
          'dynamodb:ConditionCheckItem',
          'dynamodb:PutItem',
          'dynamodb:DeleteItem',
          'dynamodb:GetItem',
          'dynamodb:UpdateItem',
          'dynamodb:Query',
        ],
        Resource: fnGetAtt(Resources.SampleDD, 'Arn'),
      },
    ],
  },

  * * For the functions that need to access the SQS queue, you need to add the following code:
  [Functions.Sample]: {
    handler: createHandlerPath(Functions.Sample),
    events: [
      {
        sqs: {
          batchSize: 1,
          arn: fnGetAtt(Resources.Sample, 'Arn'),
        },
      },
    ],
    environment: {
      maxBatchSize: '20',
      [Env.Sample2]: {
        Ref: Resources.Sample2,
      },
      [Env.Sample3]: {
        Ref: Resources.Sample3,
      },
    },
    iamRoleStatements: [
      {
        Effect: 'Allow',
        Action: ['sqs:receiveMessage', 'sqs:deleteMessage'],
        Resource: fnGetAtt(Resources.Sample2, 'Arn'),
      },
      {
        Effect: 'Allow',
        Action: ['sqs:SendMessage'],
        Resource: fnGetAtt(Resources.Sample3, 'Arn'),
      },
    ],
  },
  */
};
