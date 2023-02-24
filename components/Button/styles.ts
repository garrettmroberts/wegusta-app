import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'
import Sizes from '../../constants/Sizes'

const styles = StyleSheet.create({
  centered: {
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  contentWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
  },
  buttonSmall: {
    borderRadius: 8,
  },
  buttonReg: {
    borderRadius: 12,
  },
  primary: {
    backgroundColor: Colors.primary,
  },
  secondary: {
    backgroundColor: Colors.greyLight,
  },
  tertiary: {
    backgroundColor: Colors.white,
  },
  disabled: {
    backgroundColor: Colors.greyLight,
  },
  destructive: {
    backgroundColor: Colors.error,
  },
  fullWidth: {
    height: 56,
    width: Sizes.screenWidth - 32,
    paddingHorizontal: 24,
  },
  large: {
    height: 48,
    paddingHorizontal: 32,
  },
  medium: {
    height: 40,
    paddingHorizontal: 32,
  },
  small: {
    height: 32,
    paddingHorizontal: 32,
  },
  text: {
    marginHorizontal: 10,
    alignSelf: 'center',
  },
  darkText: {
    color: Colors.primary,
  },
  grayText: {
    color: Colors.grey,
  },
  lightText: {
    color: Colors.white,
  },
})

export default styles