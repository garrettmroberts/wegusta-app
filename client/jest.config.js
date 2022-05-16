module.exports = {
    preset: 'jest-expo',
    setupFilesAfterEnv: ['<rootDir>/app/tests/setupTests.js'],
    transform: {
        '\\.(js|jsx|ts|tsx)$': require.resolve(
            'react-native/jest/preprocessor.js'
        ),
    },
    transformIgnorePatterns: [
        'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)',
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
}
