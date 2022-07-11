import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { Context } from './utils/Context'
import Navigator from './navigation/AppNavigator'
import { StyleSheet } from 'react-native';

// export default function App() {
//   return (
//       <><Context>
//       <Navigator />
//     </Context><StatusBar /></>
//   );
// }

export {default} from './storybook'; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});