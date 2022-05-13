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
import SignInScreen1 from '../screens/SignInScreen1/SignInScreen1';
import SignInScreen2 from '../screens/SignInScreen2/SignInScreen2';
import SignInScreen3 from '../screens/SignInScreen3/SignInScreen3';
import SignInScreen4 from '../screens/SignInScreen4/SignInScreen4';
import navOptions from './options';

import Title from './macros/Title';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="SignIn1"
        component={SignInScreen1}
        options={navOptions.signInScreen}
      />
      <Stack.Screen
        name="SignIn2"
        component={SignInScreen2}
        options={navOptions.signInScreen}
      />
      <Stack.Screen 
        name="SignIn3"
        component={SignInScreen3}
        options={navOptions.signInScreen}
      />
      <Stack.Screen 
        name="SignIn4"
        component={SignInScreen4}
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
