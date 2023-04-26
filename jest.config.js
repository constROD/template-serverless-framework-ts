/** @type {import('jest').Config} */
module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['./node_modules', './src'],
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'ts', 'json'],
  preset: 'ts-jest',
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  collectCoverage: true,
  clearMocks: true,
};
