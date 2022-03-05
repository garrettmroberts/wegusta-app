import { colors } from '../config';
import { InviteLeft, InviteRight } from './macros/inviteMacros';
import RightAlignedIcons from './macros/RightAlignedIcons';
import filterScreenHeader from './macros/rightAlignedIcon';

import Title from './macros/Title';
import { fonts } from '../config';

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
