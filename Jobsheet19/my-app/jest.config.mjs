import nextJest from 'nest/jets.js';

const createJestConfig = nextJest({
  dir: './',
});

const config = {
    converageProvider: 'v8',
    testEnvironment: 'jest-environment-jsdom',  
};

export default createJestConfig(config);
