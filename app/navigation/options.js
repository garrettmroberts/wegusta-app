import { colors } from '../config';
import { InviteLeft, InviteRight } from './macros/inviteMacros';
import RightAlignedIcon from './macros/rightAlignedIcon';
import RightAlignedIcons from './macros/RightAlignedIcons';
import Title from './macros/Title';
import { fonts } from '../config';

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
    headerTintColor: colors.primary,
    headerStyle: {
      shadowColor: 'transparent'
    } 
  },
  backAndForwardNavigation: {
    headerTitle: '',
    headerTintColor: colors.primary,
    headerLeft: InviteLeft,
    headerRight: InviteRight
  }
};

export default navOptions;
