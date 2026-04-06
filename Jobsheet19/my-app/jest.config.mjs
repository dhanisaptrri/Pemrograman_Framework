import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config = {
    converageProvider: 'v8',
    testEnvironment: 'jsdom',  
};

export default createJestConfig(config);
