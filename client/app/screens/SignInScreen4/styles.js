import { StyleSheet } from 'react-native';
import { colors, constants, fonts } from '../../config';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.white
  },
  wrapper: {
    height: constants.screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  buttonPlacement: {
    position: 'absolute',
    bottom: 0,
    zIndex: 1
  },
  colorSelectionWrapper: {
    width: constants.screenWidth
  },
  colorSelection: {
    height: 72,
    borderRadius: 12,
    margin: 8
  },
  grey: {
    backgroundColor: colors.grey
  },
  tertiary: {
    backgroundColor: colors.tertiary
  },
  danger: {
    backgroundColor: colors.danger
  }
});

export default styles;
