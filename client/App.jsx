import 'react-native-gesture-handler';
import React from 'react';
import { Context } from './app/utils/Context';
import Navigator from './app/navigation/AppNavigator';
import { StatusBar } from 'expo-status-bar';
import StorybookUIRoot from './storybook';

const App = () => {
  return (
    <Context>
      <Navigator />
      <StatusBar style="auto" />
      <StorybookUIRoot />
    </Context>
  );
};

export default App;
