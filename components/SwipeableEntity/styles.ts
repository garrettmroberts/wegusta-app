import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'
import Fonts from '../../constants/Fonts'
import Sizes from '../../constants/Sizes'

export default StyleSheet.create({
  container: {
    width: Sizes.screenWidth - Sizes.viewPadding * 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    ...Fonts.displayBold,
    borderWidth: 2,
    paddingHorizontal: 10
  },
  center: {
    position: 'absolute',
    top: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  likeText: {
    position: 'relative',
    top: 50,
    color: Colors.success,
    backgroundColor: `${Colors.success}25`,
    borderColor: Colors.success
  },
  dislikeText: {
    color: Colors.error,
    backgroundColor: `${Colors.error}25`,
    borderColor: Colors.error
  }
})
