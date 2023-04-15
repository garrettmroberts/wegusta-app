import { StatusBar } from 'expo-status-bar'
import { AppProvider } from './utils/Context/Context'
import Navigator from './navigation/AppNavigator'
import { Amplify } from 'aws-amplify'
import config from './aws-exports'

Amplify.configure(config)

const App = () => {
  // Auth.signOut()

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