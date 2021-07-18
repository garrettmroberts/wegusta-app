import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import HomeScreenHeaderRight from '../screens/HomeScreen/HomeScreenHeaderRight';
import ComponentsDemo from '../screens/ComponentsDemo';
import { colors } from '../config';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home" 
        component={HomeScreen} 
        options={{ 
          title: 'Welcome',
          headerRight: HomeScreenHeaderRight,
          headerTitleAlign: 'left',
          headerTintColor: colors.primary,
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }} 
      />
      <Stack.Screen 
        name="ComponentsDemo"
        component={ComponentsDemo}
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
