import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'
import Fonts from '../../constants/Fonts'
import Sizes from '../../constants/Sizes'

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  wrapper: {
    height: Sizes.screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    ...Fonts.h1Bold,
    marginTop: 50,
  },
  textInputWrapper: {
    backgroundColor: Colors.grey,
    width: Sizes.screenWidth - Sizes.viewPaddingSmall * 2,
    height: 56,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 18,
  },
  inputPrepend: {
    color: Colors.greyDark,
  },
  input: {
    marginLeft: 8,
    width: 100,
  },
  toast: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
  },
  visible: {
    display: 'flex',
  },
  invisible: {
    display: 'none',
  },
  termsAndConditions: {
    ...Fonts.bodyReg,
    marginHorizontal: 30,
    lineHeight: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  inputBlockWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  helperText: {
    ...Fonts.bodyReg,
    textAlign: 'center',
  },
  bold: {
    ...Fonts.bodyBold,
  },
  signinStage2ButtonPlacement: {
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
  },
})

export default styles