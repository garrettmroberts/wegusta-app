import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'
import Fonts from '../../constants/Fonts'
import Sizes from '../../constants/Sizes'

export default StyleSheet.create({
  container: {
    width: Sizes.screenWidth - Sizes.viewPadding * 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    position: 'absolute',
    // top: 150,
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flex: 1,
  },
  text: {
    height: 103,
  },
  textWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Sizes.cardHeight
  }
})
