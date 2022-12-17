import { StatusBar } from 'expo-status-bar';
import { AppProvider } from './utils/Context/Context';
import Navigator from './navigation/AppNavigator';
import { StyleSheet } from 'react-native';
import firebaseConfig from './config/firebaseConfig';
import { initializeApp } from 'firebase/app';

const App = () => {
  initializeApp(firebaseConfig);

  return (
    <>
      <AppProvider>
        <Navigator />
      </AppProvider>
      <StatusBar />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
