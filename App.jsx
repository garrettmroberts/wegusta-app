import React from 'react';
import { Context } from './app/utils/Context';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './app/navigation/AppNavigator';

const App = () => {
  return (
    <Context>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Context>
  );
};

export default App;
