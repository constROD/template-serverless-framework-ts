/**
 * Makes a serverless variable.
 *
 * @param variable serverless variable
 * @returns the serverless variable in the format of `${<variable>}` (e.g. `${self:service}`)
 */
export const makeSlsVariable = (variable: string) => (variable ? `\${${variable}}` : '');
