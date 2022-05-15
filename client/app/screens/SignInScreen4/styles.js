import { StyleSheet } from 'react-native';
import { colors, constants, fonts } from '../../config';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.white
  },
  wrapper: {
    height: constants.screenHeight,
    // justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  buttonPlacement: {
    position: 'absolute',
    bottom: 0,
    zIndex: 1
  },
  colorSelectionWrapper: {
    width: constants.screenWidth,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 32
  },
  colorSelection: {
    height: 72,
    borderRadius: 12,
    margin: 8,
    width: 100,
    maxWidth: 104
  },
  grey: {
    backgroundColor: colors.grey
  },
  tertiary: {
    backgroundColor: colors.tertiary
  },
  error: {
    backgroundColor: colors.error
  },
  accent: {
    backgroundColor: colors.accent
  },
  primary: {
    backgroundColor: colors.primary
  },
  secondary: {
    backgroundColor: colors.secondary
  }
});

export default styles;
