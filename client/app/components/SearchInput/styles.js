import { StyleSheet } from 'react-native'
import { colors, constants } from '../../config'

const styles = StyleSheet.create({
  inputWrapper: {
    borderRadius: 20,
    backgroundColor: colors.greyLight,
    height: 56,
    width: constants.screenWidth - 48,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 15,
  },
  input: {
    fontSize: 18,
    flex: 2,
  },
  icon: {
    marginLeft: 22,
    marginRight: 10,
  },
  invisible: {
    display: 'none',
  },
  clearButton: {
    height: 48,
    paddingLeft: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default styles
