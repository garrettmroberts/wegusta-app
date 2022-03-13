import { colors } from '../config';
import RightAlignedIcons from './macros/RightAlignedIcons';

import Title from './macros/Title';

const navOptions = {
  leftAlignWithIcons: { 
    title: 'Welcome',
    headerRight: RightAlignedIcons,
    headerTitleAlign: 'left',
    headerTitle: Title({headerText: 'Welcome'})
  },
  leftAlignNoIcons: {
    headerTitle: '',
    headerBackTitle: 'Notifications',
    headerTintColor: colors.primary
  },
  centerAlign: {
    headerBackTitleVisible: false,
    headerTintColor: colors.black,
    headerStyle: {
      shadowColor: 'transparent'
    } 
  },
  backAndForwardNavigation: {
    headerTitle: Title({headerText: 'Who is joining?'}),
    headerTintColor: colors.black,
    headerBackTitleVisible: false,
    headerStyle: {
      shadowColor: 'transparent'
    }
  }
};

export default navOptions;
