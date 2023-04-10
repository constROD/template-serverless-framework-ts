import { SERVERLESS } from './constants';

/**
 * @param name either resource name or function name or any other name
 * @returns a name with stage appended
 */
export const appendStage = (name: string) => `${name}-${SERVERLESS.Stage}`;
