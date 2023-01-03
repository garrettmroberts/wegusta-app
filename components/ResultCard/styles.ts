import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'
import Fonts from '../../constants/Fonts'
import Sizes from '../../constants/Sizes'

const overlayButtonWidth = 56
const overlayButtonPadding = 24

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.2,
    shadowRadius: 40,
    elevation: 6,
  },
  card: {
    backgroundColor: Colors.white,
    flex: 1,
    width: Sizes.screenWidth - Sizes.viewPadding * 2,
    maxHeight: 600,
    overflow: 'hidden',
    borderRadius: 40
  },
  imageWrapper: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    position: 'relative'
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  overlayButton: {
    height: 56,
    width: overlayButtonWidth,
    backgroundColor: Colors.white,
    position: 'absolute',
    borderRadius: 16,
    bottom: overlayButtonPadding,
    justifyContent: 'center',
    alignItems: 'center'
  },
  overlayButton1: {
    right: overlayButtonPadding
  },
  overlayButton2: {
    right: overlayButtonPadding * 2 + overlayButtonWidth
  },
  textWrapper: {
    padding: 24,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    position: 'relative'
  },
  titleText: {
    ...Fonts.h1Bold
  },
  description1: {
    ...Fonts.inputLabel,
    color: Colors.greyDark,
    marginTop: 5
  },
  description2: {
    ...Fonts.bodyReg
  }
})

export default styles
