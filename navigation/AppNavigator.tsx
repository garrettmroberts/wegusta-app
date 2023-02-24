import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import PreferenceSelectorScreen from '../screens/PreferenceSelectorScreen/PreferenceSelectorScreen'
import SignupScreen from '../screens/SignupScreen/SignupScreen'
import SuggestionScreen from '../screens/SuggestionScreen/SuggestionScreen'
import LeftAlignedTitle from './LeftAlignedTitle'
import RightAlignedIcon from './RightAlignedIcon'
import { AppContext } from '../utils/Context/Context'

const Stack = createNativeStackNavigator()
const StackNavigator = () => {
  const { dispatch } = useContext(AppContext)

  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerBackButtonMenuEnabled: false,
        headerBackVisible: false,
        headerShadowVisible: false
      }}
    >
      <Stack.Screen 
        name="SignupScreen"
        component={SignupScreen}
        options={{
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
