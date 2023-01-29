import { AwsCfJoin } from '@serverless/typescript';
import { Customs, Serverless } from 'shared/constants/config';

export const appendStage = (name: string) => `${name}-${Serverless.Stage}`;

/**
 * Returns a Serverless configuration variable that refers to a property defined
 * in the custom part of the configuration (in `custom.ts`).
 *
 * @param variableNames JSON path (object.abc.xyz) of the property to get in the custom config.
 *  E.g. passing in `values.test` will resolve to `${self:custom.values.test}`
 */
export const custom = <T = string>(...variableNames: string[]) =>
  `\${self:custom.${variableNames.join('.')}}` as unknown as T;

/**
 * Returns a Serverless configuration variable that refers to the `Secrets`
 * property defined in the custom part which retrieves a secret from the
 * Secrets Manager.
 *
 * @param name Name or key of the secret to retrieve
 */
export const secret = (name: string) => custom(Customs.Secrets, name);

/**
 * @param name Base name of the resource
 * @returns Name prepended with the service name and deployment stage
 */
export const resourceName = (name: string) =>
  `${Serverless.ServiceName}-${Serverless.Stage}-${name}`;

export const fnGetAtt = (resourceKeyName: string, attribute: string) => ({
  'Fn::GetAtt': [resourceKeyName, attribute],
});

export const fnJoin = (delimiter: string, values: string[]) => ({
  'Fn::Join': [delimiter, values],
});

/**
 * Returns a Serverless configuration variable that refers to a property in the `Outputs`
 * of the CloudFormation template of the `resources` part of the configuration.
 *
 * @param resourceKey Key of the Output property
 */
export const resourcesOutputs = (resourceKey: string) =>
  `\${self:resources.Outputs.${resourceKey}.Value}`;

export const apiGatewayUrl = (path = ''): AwsCfJoin => ({
  'Fn::Join': [
    '',
    [
      'https://',
      { Ref: 'HttpApi' },
      '.execute-api.',
      { Ref: 'AWS::Region' },
      '.amazonaws.com',
      path,
    ],
  ],
});
