/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
    snapshotSerializers: ['@emotion/jest/serializer'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transformIgnorePatterns: [], testEnvironment: 'jsdom',
    transform: {
        '.*\\.(tsx?|jsx?)$': [
            '@swc/jest',
            {
                jsc: {
                    transform: {
                        react: {
                            runtime: 'automatic',
                        },
                    },
                },
            },
        ],
    },
};