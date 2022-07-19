import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import Sizes from '../../constants/Sizes';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white
  },
  decisionWrapper: {
    flexDirection: 'row',
    width: Sizes.screenWidth - Sizes.viewPadding,
    justifyContent: 'space-around',
    marginTop: 16
  }
});

export default styles;
