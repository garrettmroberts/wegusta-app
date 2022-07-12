import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('@expo/vector-icons', () => {
  const { View } = require('react-native');
  return {
    SimpleLineIcons: View,
    Ionicons: View,
  };
});