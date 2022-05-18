import { StyleSheet } from 'react-native'
import { fonts, colors, constants } from '../../config'

const styles = StyleSheet.create({
  centered: {
    width: constants.screenWidth,
    alignItems: 'center',
  },
  buttons: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    bottom: 0,
    paddingBottom: 50,
    paddingTop: 15,
    backgroundColor: colors.white,
  },
  leftButton: {
    width: constants.screenWidth * 0.4,
  },
  rightButton: {
    width: constants.screenWidth * 0.5,
  },
  wrapper: {
    height: constants.viewHeight,
    backgroundColor: colors.white,
  },
  spacer: {
    height: 70,
  },
  bottomMargin: {
    marginBottom: 8,
  },
})

export default styles
