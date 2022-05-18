import { StyleSheet } from 'react-native'
import { colors, constants } from '../../config'

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    width: constants.screenWidth,
    marginVertical: 8,
  },
  scroll: {},
  leftAlign: {},
  regMargin: {
    marginRight: 16,
  },
  smallMargin: {
    marginRight: 8,
  },
  centered: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
})

export default styles
