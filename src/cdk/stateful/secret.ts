import * as cdk from 'aws-cdk-lib';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
import { type Construct } from 'constructs';
import { RESOURCES } from 'serverless/constants';
import { env } from 'shared/constants/environments';
import { transformToPascal } from 'shared/utils/commons';

export class SecretStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const SecretPascalCase = transformToPascal(`${RESOURCES.Secret}${env.STAGE}`);

    new secretsmanager.Secret(this, SecretPascalCase, {
      secretName: `${RESOURCES.Secret}/${env.STAGE}`,
      generateSecretString: {
        secretStringTemplate: JSON.stringify({}),
        generateStringKey: 'placeholder',
      },
    });
  }
}
