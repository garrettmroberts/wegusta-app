import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'
import Fonts from '../../constants/Fonts'
import Sizes from '../../constants/Sizes'

const styles = StyleSheet.create({
  // Reusable styles
  defaultFlex: {
    flex: 1,
  },
  viewPadding: {
    paddingHorizontal: Sizes.viewPadding
  },
  viewPaddingSmall: {
    paddingHorizontal: Sizes.viewPaddingSmall
  },
  visible: {
    display: 'flex',
  },
  invisible: {
    display: 'none',
  },
  whiteBackground: {
    backgroundColor: Colors.white,
  },
  screenLayout: {
    justifyContent: 'space-between',
  },
  screenLayoutAlt: {
    justifyContent: 'flex-start',
  },
  bold: {
    fontWeight: '800'
  },
  headerTextWrap: {
    paddingHorizontal: Sizes.viewPadding
  },
  headerText: {
    ...Fonts.h1Bold,
  },
  // Specific styles
  wegustaTextImage: {
    marginTop: 5,
    width: 150,
    resizeMode: 'contain'
  },
  label: {
    ...Fonts.inputLabel,
    marginLeft: 12
  },
  labelAlt: {
    ...Fonts.inputLabel,
    marginTop: 8,
    marginLeft: 9,
    marginBottom: 2
  },
  textInputWrapper: {
    backgroundColor: Colors.greyLight,
    width: Sizes.screenWidth - Sizes.viewPadding * 2,
    height: 56,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: 18,
  },
  textInputWrapperAlt: {
    backgroundColor: Colors.greyLight,
    width: Sizes.screenWidth - Sizes.viewPadding * 2,
    height: 56,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginTop: 8,
    fontSize: 18,
  },
  input: {
    marginLeft: 8,
    width: '100%',
    alignSelf:'stretch'
  },
  termsAndConditions: {
    ...Fonts.metaReg,
    marginHorizontal: 20,
    lineHeight: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  helperText: {
    ...Fonts.metaReg,
    marginHorizontal: 20,
    lineHeight: 16,
    marginTop: 8,
  },
  avatarWrapper: {
    marginBottom: 25,
    marginTop: 27
  },
  verticalSpacer: {
    height: 16
  },
  colorSelector: {
    marginTop: 24
  },
  colorWrapper: {
    marginTop: 17,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colorBoxWrapper: {
    height: 72,
    minWidth: 12,
    flex: 1,
    borderRadius: 12,
  },
  colorBox: {
    height: 72,
    minWidth: 12,
    flex: 1,
    borderRadius: 12,

  },
  greyLight: {
    backgroundColor: Colors.greyLight,
    marginRight: 8
  },
  tertiary: {
    backgroundColor: Colors.tertiary,
    marginLeft: 8,
    marginRight: 8
  },
  error: {
    backgroundColor: Colors.error,
    marginLeft: 8
  },
  accent: {
    backgroundColor: Colors.accent,
    marginRight: 8
  },
  primary: {
    backgroundColor: Colors.primary,
    marginLeft: 8,
    marginRight: 8
  },
  secondary: {
    backgroundColor: Colors.secondary,
    marginLeft: 8
  },
  fixedPositionBottomScreen: {
    position: 'absolute',
    bottom: 25,
    marginHorizontal: Sizes.viewPaddingSmall
  }
})

export default styles