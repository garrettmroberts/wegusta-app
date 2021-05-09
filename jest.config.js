module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/app/tests/setupTests.js'],
  transform: {
    '\\.(js|jsx|ts|tsx)$': require.resolve('react-native/jest/preprocessor.js')
  }
};
