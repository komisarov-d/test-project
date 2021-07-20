module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jest-environment-node',
	testPathIgnorePatterns: ['/node_modules/', '/dist/'],
	testMatch: ['**/tests/testCases/**/*.test.ts']
};
