import { StyleSheet } from 'react-native'
import Sizes from '../../constants/Sizes'

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: Sizes.cardHeight
  },
  cardPlacementTop: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    alignItems: 'center'
  },
  cardPlacementBack: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 20,
    alignItems: 'center',
  }
})

export default styles
