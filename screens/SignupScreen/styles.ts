import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'
import Fonts from '../../constants/Fonts'
import Sizes from '../../constants/Sizes'

const styles = StyleSheet.create({
  // Reusable styles
  defaultFlex: {
    flex: 1
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
  }
})

export default styles