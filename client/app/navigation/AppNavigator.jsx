/* eslint-disable react/display-name */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ComponentsDemo from '../screens/ComponentsDemo';
import InviteScreen from '../screens/InviteScreen/InviteScreen';
import NotificationScreen from '../screens/NotificationScreen/NotificationScreen';
import FilterScreen from '../screens/FilterScreen/FilterScreen';
import PreferenceSelectorScreen from '../screens/PreferenceSelectorScreen/PreferenceSelectorScreen';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import navOptions from './options';

import Title from './macros/Title';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="SignIn"
        component={SignInScreen}
        options={navOptions.signInScreen}
      />
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
      <Stack.Screen
        name="Notifications"
        component={NotificationScreen}
        options={navOptions.centerAlign}
      />
      <Stack.Screen
        name="Invite"
        component={InviteScreen}
        options={navOptions.backAndForwardNavigation}
      />
      <Stack.Screen 
        name="Filter"
        component={FilterScreen}
        options={{
          headerTitle: () => <Title headerText='How far away?' />,
          ...navOptions.centerAlign
        }}
      />
      <Stack.Screen
        name="PreferenceSelector"
        component={PreferenceSelectorScreen}
        options={{
          headerTitle: () => <Title headerText='What looks good?' />,
          ...navOptions.centerAlign
        }}
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
