import { makeSlsVariable } from './helpers';

/**
 * Your service name and this will also used for naming convention.
 *
 * @example
 *
 * If you set this to `constrod` then the name of your lambda/resource will be `constrod-dev-<FUNCTIONS/RESOURCES_KEYS>`.
 * Ex. `constrod-dev-Samples`, `constrod-dev-SomeExample` and etc.
 */
export const SERVICE_NAME = 'constrod' as const;

/* Default timeout for lambda functions */
export const LAMBDA_TIMEOUT = 10 as const;

/* AWS Region */
export const AWS_REGION = 'ap-southeast-1' as const;

export const STAGE = makeSlsVariable(`opt:stage, 'dev'`);

export const CUSTOMS = {
  Secrets: 'secrets',
} as const;

/**
 * * Note: For both `RESOURCES` and `FUNCTIONS`
 * Transform the `key` to `PascalCase`.
 *
 * ? Why? Because the cloudformation will convert the key from `kebab-case` to `KebabDashCase`
 * ? so we need to convert it to `PascalCase` to prevent the `Dash` in the name.
 */
export const RESOURCES = {
  Secret: 'secret',
} as const;

export const FUNCTIONS = {
  Swagger: 'swagger',
  Samples: 'samples',
  SomeExample: 'some-example',
} as const;
