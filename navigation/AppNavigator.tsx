import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import PreferenceSelectorScreen from '../screens/PreferenceSelectorScreen/PreferenceSelectorScreen'
import SignupScreen1 from '../screens/SignupScreens/SignupScreen1'
import SignupScreen2 from '../screens/SignupScreens/SignupScreen2'
import SuggestionScreen from '../screens/SuggestionScreen/SuggestionScreen'
import LeftAlignedTitle from './LeftAlignedTitle'
import RightAlignedIcon from './RightAlignedIcon'
import { AppContext } from '../utils/Context/Context'
import Colors from '../constants/Colors'

const Stack = createNativeStackNavigator()
const StackNavigator = () => {
  const { dispatch } = useContext(AppContext)

  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerBackButtonMenuEnabled: false,
        headerBackVisible: false,
        headerShadowVisible: false,
        headerTintColor: Colors.black,
      }}
    >
      <Stack.Screen 
        name="SignupScreen1"
        component={SignupScreen1}
        options={{
          title: ''
        }}
      />
      <Stack.Screen 
        name="SignupScreen2"
        component={SignupScreen2}
        options={{
          headerBackVisible: true,
          title: ''
        }}
      />
      <Stack.Screen
        name="PreferenceSelectorScreen"
        component={PreferenceSelectorScreen}
        options={{
          title: '',
          headerLeft: () => LeftAlignedTitle({title: 'What looks good?'}),
          headerRight: () => RightAlignedIcon({iconName: 'settings', onPress: () => {
            dispatch({type: 'updateOptionsVisibility'})
          }}) }}
      />
      <Stack.Screen
        name="SuggestionScreen"
        component={SuggestionScreen}
        options={{
          title: '',
          headerLeft: () => LeftAlignedTitle({title: 'Your Match!'}),
        }}
      />
    </Stack.Navigator>
  )
}

const Navigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default Navigator
