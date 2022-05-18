import { StyleSheet } from 'react-native'
import { colors, constants, fonts } from '../../config'

const styles = StyleSheet.create({
  circle: {
    borderRadius: 90,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  large: {
    height: 56,
    width: 56,
  },
  medium: {
    height: 40,
    width: 40,
  },
  small: {
    height: 32,
    width: 32,
  },
  xsmall: {
    height: 24,
    width: 24,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.greyLight,
  },
})

export default styles
