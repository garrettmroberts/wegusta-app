import { StyleSheet } from 'react-native';
import { colors, constants, fonts } from '../../config';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1
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
  input: {
    backgroundColor: colors.grey,
    width: constants.screenWidth - (constants.viewPaddingSmall * 2),
    height: 56,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginVertical: 12
  },
  toast: {
    position: 'absolute',
    zIndex: 1,
    top: 0
  },
  visible: {
    display: 'flex'
  },
  invisible: {
    display: 'none'
  },
  termsAndConditions: {
    ...fonts.bodyReg,
    marginHorizontal: 30,
    lineHeight: 16,
    marginBottom: 16,
    textAlign: 'center'
  },
  inputBlockWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1
  }
});

export default styles;
