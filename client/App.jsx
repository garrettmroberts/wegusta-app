import 'react-native-gesture-handler'
import React from 'react'
import { Context } from './app/utils/Context'
import Navigator from './app/navigation/AppNavigator'
import { StatusBar } from 'expo-status-bar'
import StorybookUI from './storybook'
import { LOAD_STORYBOOK } from '@env'

const App = () => {
  return (
    <Context>
      <Navigator />
      <StatusBar style="auto" />
    </Context>
  )
}

// export default App;
export default LOAD_STORYBOOK === 'true' ? StorybookUI : App
