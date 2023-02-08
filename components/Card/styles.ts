import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'
import Sizes from '../../constants/Sizes'

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.white,
    height: Sizes.cardHeight,
    borderRadius: 20,
    overflow: 'hidden'
  },
  card: {
    height: Sizes.cardHeight,
    width: Sizes.screenWidth - Sizes.viewPadding * 2,
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    overflow: 'hidden'
  }
})

export default styles
