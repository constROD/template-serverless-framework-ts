import { SERVERLESS } from './constants';

/**
 *
 * @param name either resource name or function name or any other name
 * @returns a name with stage appended
 */
export const appendStage = (name: string) => `${name}-${SERVERLESS.Stage}`;

/**
 * Get a custom variable from /src/serverless/custom.ts configuration
 *
 * @param variableNames variable names to be joined with dot
 * @returns a string with custom variables
 *
 * @example
 *
 * const bucketName = custom(CUSTOMS.Secrets, 'some_key');
 *
 * Expected Output: '${self:custom.secrets.some_key}'
 */

export const custom = (...variableNames: string[]) => `\${self:custom.${variableNames.join('.')}}`;
