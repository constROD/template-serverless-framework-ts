import type { AWS, AwsIamPolicyStatements } from '@serverless/typescript';

type FunctionConfig = NonNullable<AWS['functions']>[string] & {
  iamRoleStatements?: AwsIamPolicyStatements;
};

/* This type is used to augment the `AWS['functions']` type
  with other properties coming from Serverless plugins. */
export type FunctionsConfig = Record<string, FunctionConfig>;
