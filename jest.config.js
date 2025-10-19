module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
  collectCoverageFrom: ['*.js', '!jest.config.js', '!node_modules/**'],
  coverageDirectory: 'coverage',
  verbose: true,
};
