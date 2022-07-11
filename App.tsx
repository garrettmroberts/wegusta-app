import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { Context } from './utils/Context'
import Navigator from './navigation/AppNavigator'
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import StorybookUI from './storybook'

const App = () => {
  return (
      <><Context>
      <Navigator />
    </Context><StatusBar /></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Constants.manifest?.extra?.loadStorybook === 'true' ?  StorybookUI : App