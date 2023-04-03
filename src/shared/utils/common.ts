import camelCase from 'lodash/camelCase';
import startCase from 'lodash/startCase';

export const transformToPascal = (text: string) => startCase(camelCase(text)).replace(/ /g, '');
