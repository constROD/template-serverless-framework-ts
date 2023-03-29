import type swaggerJSDoc from 'swagger-jsdoc';

/**
 * Make swagger paths from array of swaggerJSDoc.Paths
 *
 * @param docsArr array of swaggerJSDoc.Paths
 * @returns swaggerJSDoc.Paths
 */
export const makeSwaggerPaths = (docsArr: swaggerJSDoc.Paths[]) => {
  const swaggerPaths = docsArr.reduce((accum, current) => {
    const currentPath = Object.keys(current)[0] as keyof typeof accum;
    // If the current path already exists in the accumulator, merge the current path with the accumulator path
    if (accum[currentPath]) {
      return {
        ...accum,
        [currentPath]: {
          ...accum[currentPath],
          ...current[currentPath],
        },
      };
    }

    return {
      ...accum,
      ...current,
    };
  }, {});

  return swaggerPaths;
};
