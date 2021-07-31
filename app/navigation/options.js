import { colors } from '../config';
import RightAlignedIcons from './macros/RightAlignedIcons';
import Title from './macros/Title';

const navOptions = {
  leftAlignWithIcons: { 
    title: 'Welcome',
    headerRight: RightAlignedIcons,
    headerTitleAlign: 'left',
    headerTitle: Title
  },
  leftAlignNoIcons: {
    headerTitle: '',
    headerBackTitle: 'Notifications',
    headerTintColor: colors.primary
  },
  centerAlign: {
    headerBackTitleVisible: false,
    headerTitle: Title,
    headerTintColor: colors.primary
  }
};

export default navOptions;
