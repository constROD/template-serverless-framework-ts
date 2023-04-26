import * as cdk from 'aws-cdk-lib';
import { SecretStack } from './secret';

const app = new cdk.App();

/* Add Stack Here */
new SecretStack(app, 'SecretStack');
