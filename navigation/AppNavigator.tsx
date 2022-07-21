import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import PreferenceSelectorScreen from '../screens/PreferenceSelectorScreen/PreferenceSelectorScreen';
import SuggestionScreen from '../screens/SuggestionScreen/SuggestionScreen';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PreferenceSelectorScreen"
        component={PreferenceSelectorScreen}
        options={{ title: 'What looks good?' }}
      />
      <Stack.Screen
        name="SuggestionScreen"
        component={SuggestionScreen}
        options={{ title: 'Your match' }}
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
