import { colors } from '../config';
import rightAlignedIcons from './macros/rightAlignedIcons';

const navOptions = {
  leftAlignWithIcons: { 
    title: 'Welcome',
    headerRight: rightAlignedIcons,
    headerTitleAlign: 'left',
    headerTintColor: colors.primary,
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  },
  centerAlign: {
    headerTintColor: colors.primary,
    headerTitleStyle: {
      fontWeight: 'bold'
    },
    headerBackTitleVisible: false
  }
};

export default navOptions;
