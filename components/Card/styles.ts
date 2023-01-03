import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'
import Sizes from '../../constants/Sizes'

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.white,
    height: 500,
    borderRadius: 20,
    overflow: 'hidden'
  },
  card: {
    height: 500,
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
