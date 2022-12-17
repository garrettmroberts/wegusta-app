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
  },
  loadingSpinnerPlacement: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    position: 'absolute',
    zIndex: 2,
    width: Sizes.screenWidth,
    height: Sizes.screenHeight
  }
});

export default styles;
