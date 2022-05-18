import { StyleSheet } from 'react-native'
import { colors, constants } from '../../config'

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 90,
    backgroundColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  setHeight: {
    height: '100%',
  },
  large: {
    height: 80,
    width: 80,
  },
  medium: {
    height: 56,
    width: 56,
  },
  small: {
    height: 40,
    width: 40,
  },
  xsmall: {
    height: 24,
    width: 24,
  },
  navSized: {
    height: 32,
    width: 32,
  },
  accessory: {
    position: 'absolute',
    backgroundColor: colors.success,
    width: 23,
    height: 23,
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  accessorysmall: {
    bottom: -5,
    right: -5,
  },
  accessorymedium: {
    bottom: -2,
    right: -2,
  },
  accessorylarge: {
    bottom: 0,
    right: 0,
  },
  letter: {
    color: colors.white,
    fontWeight: '500',
  },
  letterlarge: {
    fontSize: 35,
  },
  lettermedium: {
    fontSize: 23,
  },
  lettersmall: {
    fontSize: 17,
  },
  letterxsmall: {
    fontSize: 12,
  },
  image: {
    borderRadius: 90,
  },
})

export default styles
