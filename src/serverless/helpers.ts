/**
 * Makes a serverless variable.
 *
 * @param variable serverless variable
 * @returns the serverless variable in the format of `${<variable>}` (e.g. `${self:service}`)
 */
export const makeSlsVariable = (variable: string) => (variable ? `\${${variable}}` : '');

/**
 * Appends the stage to the name.
 *
 * @param name the name
 * @returns the name with the stage appended (e.g. `<name>-dev`, `<name>-staging` or `<name>-prod`)
 */
export const appendStage = (name: string) => `${name}-\${opt:stage, 'dev'}`;
