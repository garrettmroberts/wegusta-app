import { StatusBar } from 'expo-status-bar'
import { AppProvider } from './utils/Context/Context'
import Navigator from './navigation/AppNavigator'

const App = () => {

  return (
    <>
      <AppProvider>
        <Navigator />
      </AppProvider>
      <StatusBar />
    </>
  )
}

export default App
