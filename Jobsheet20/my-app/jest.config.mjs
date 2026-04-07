import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config = {
    coverageProvider: 'v8',
    testEnvironment: 'jsdom', 
    modulePaths: ['<rootDir>/src/'],
    collectCoverage: true,
    collectCoverageFrom: [
        'src/pages/about/index.tsx',
        'src/pages/produk/index.tsx',
        'src/components/layouts/navbar/index.tsx',
        'src/utils/swr/fetcher.ts',
    ]
};

export default createJestConfig(config);
