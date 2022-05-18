import { StyleSheet } from 'react-native'
import { colors } from '../../config'

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.white,
    height: 80,
    width: 80,
    borderRadius: 90,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  icon: {
    position: 'relative',
    top: 2,
  },
})

export default styles
