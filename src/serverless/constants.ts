import { transformToPascal } from 'shared/utils/common';

/**
 * Your service name and this will also used for naming convention.
 *
 * @example
 *  - If you set this to `constrod` then the name of your lambda name will be
 * `constrod-dev-Samples`, `constrod-dev-SomeExample` and etc.
 */
export const SERVICE_NAME = 'constrod' as const;

/**
 * Your deployment bucket where you will save the serverless zips
 * * Note: You must create this bucket first before deploying.
 */
export const DEPLOYMENT_BUCKET_NAME = 'constrod' as const;

/* Default timeout for lambda functions */
export const LAMBDA_TIMEOUT = 10 as const;

export const SERVERLESS = {
  ServiceName: `\${self:service}`,
  Stage: `\${opt:stage, 'dev'}`,
} as const;

export const CUSTOMS = {
  Secrets: 'secrets',
  Bucket: 'constrod-resources',
} as const;

/**
 * * Note: For both `RESOURCES` and `FUNCTIONS`
 * Transform the `key` to `PascalCase`.
 *
 * ? Why? Because the cloudformation will convert the key from `kebab-case` to `KebabDashCase`
 * ? so we need to convert it to `PascalCase` to prevent the `Dash` in the name.
 */
export const RESOURCES = {
  Samples: {
    key: transformToPascal('samples'),
    name: 'samples',
  },
} as const;

export const FUNCTIONS = {
  Swagger: {
    key: transformToPascal('swagger'),
    name: 'swagger',
  },
  Samples: {
    key: transformToPascal('samples'),
    name: 'samples',
  },
  SomeExample: {
    key: transformToPascal('some-example'),
    name: 'some-example',
  },
} as const;
