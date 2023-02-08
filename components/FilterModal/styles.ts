import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'
import Fonts from '../../constants/Fonts'
import Sizes from '../../constants/Sizes'

const styles = StyleSheet.create({
  modal: {
    height: Sizes.screenHeight,
    width: Sizes.screenWidth,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    overflow: 'hidden',
  },
  modalBody: {
    paddingHorizontal: Sizes.viewPadding,
    paddingBottom: 58,
    paddingTop: 44,
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    height: 320,
    position: 'absolute',
    bottom: 0
  },
  header: {
    ...Fonts.h1Bold
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24
  },
  clearButton: {
    color: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  continueButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 12,
  },
  continueButtonText: {
    color: Colors.white
  }
})

export default styles
