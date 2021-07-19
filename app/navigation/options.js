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
  centerAlign: {
    headerBackTitleVisible: false,
    headerTitle: Title,
    headerTintColor: colors.primary
  }
};

export default navOptions;
