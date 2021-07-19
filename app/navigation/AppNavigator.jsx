import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ComponentsDemo from '../screens/ComponentsDemo';
import { colors } from '../config';
import navOptions from './options';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home" 
        component={HomeScreen} 
        options={navOptions.leftAlignWithIcons}
      />
      <Stack.Screen 
        name="ComponentsDemo"
        component={ComponentsDemo}
        options={navOptions.centerAlign}
      />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
