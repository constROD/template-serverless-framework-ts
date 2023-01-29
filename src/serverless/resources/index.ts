import type { AWS } from '@serverless/typescript';

export const resources: AWS['resources'] = {
  Resources: {
    /**
     * * For the DynamoDB Table, follow the steps below:
    [Resources.Sample]: {
      Type: 'AWS::DynamoDB::Table',
      Properties: {
        TableName: resourceName(Resources.Sample),
        AttributeDefinitions: [
          {
            AttributeName: 'pk',
            AttributeType: 'S',
          },
          {
            AttributeName: 'sk',
            AttributeType: 'S',
          },
        ],
        KeySchema: [
          {
            AttributeName: 'pk',
            KeyType: 'HASH',
          },
          {
            AttributeName: 'sk',
            KeyType: 'RANGE',
          },
        ],
        ProvisionedThroughput: {
          ReadCapacityUnits: 1,
          WriteCapacityUnits: 1,
        },
        StreamSpecification: {
          StreamViewType: 'NEW_IMAGE',
        },
      },
    },

    * * For SQS, follow the steps below:
    [Resources.Sample]: {
      Type: 'AWS::SQS::Queue',
      Properties: {
        QueueName: resourceName(Resources.Sample),
        RedrivePolicy: {
          deadLetterTargetArn: fnGetAtt(Resources.SampleDeadLetter, 'Arn'),
          maxReceiveCount: 3,
        },
      },
    },
    [Resources.SampleDeadLetter]: {
      Type: 'AWS::SQS::Queue',
      Properties: {
        QueueName: resourceName(Resources.SampleDeadLetter),
      },
    },

    * * For SNS, follow the steps below:
    [Resources.Sample]: {
      Type: 'AWS::SNS::Topic',
      Properties: {
        TopicName: resourceName(Resources.Sample),
      },
    },

    */
  },
};
