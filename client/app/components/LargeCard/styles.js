import { StyleSheet } from 'react-native'
import { colors, constants, fonts } from '../../config'

const styles = StyleSheet.create({
  wrapper: {
    width: constants.screenWidth - constants.viewPadding * 2,
    borderRadius: 40,
    overflow: 'hidden',
    backgroundColor: colors.white,
    height: 514,
  },
  image: {
    height: 300,
    width: constants.screenWidth - constants.viewPadding * 2,
  },
  textWrapper: {
    padding: 24,
  },
  title: {
    ...fonts.h1Bold,
  },
  starWrapper: {
    marginTop: 8,
    flexDirection: 'row',
    marginLeft: -3,
  },
  star: {
    width: 14,
    marginHorizontal: 3,
  },
  starInactive: {
    opacity: 0.25,
  },
  subheaders: {
    ...fonts.inputLabel,
    color: colors.greyDark,
    marginTop: 8,
  },
  description: {
    ...fonts.bodyReg,
    color: colors.greyDark,
    marginTop: 16,
  },
})

export default styles
