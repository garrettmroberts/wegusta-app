import React from 'react';
import { Context } from './app/utils/Context';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './app/navigation/AppNavigator';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  return (
    <Context>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
      <StatusBar style="auto" />
    </Context>
  );
};

export default App;
