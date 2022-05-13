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
  text: {
    ...fonts.h1Bold,
    marginTop: 50
  },
  inputWrapper: {
    backgroundColor: colors.greyLight,
    width: constants.screenWidth - (constants.viewPaddingSmall * 2),
    height: 56,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 6,
    marginBottom: 16
  },
  inputLabel: {
    ...fonts.inputLabel
  },
  input: {
    ...fonts.h2Reg
  },
  inputBlockWrapper: {
    justifyContent: 'center',
    flex: 1
  },
  buttonPlacement: {
    position: 'absolute',
    bottom: 0,
    zIndex: 1
  }
});

export default styles;
