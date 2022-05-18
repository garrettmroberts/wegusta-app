import { StyleSheet } from 'react-native'
import { constants, fonts } from '../../config'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  wrapper: {
    marginLeft: 24,
    alignItems: 'flex-start',
    maxWidth: constants.screenWidth - constants.screenWidth * 0.46,
    position: 'relative',
    bottom: 60,
  },
  header: {
    ...fonts.displayBold,
    ...fonts.textDark,
  },
  secondaryHeader: {
    ...fonts.displayBold,
    ...fonts.textGreyDark,
  },
  subtext: {
    ...fonts.h2Reg,
    ...fonts.textDark,
    marginBottom: 16,
  },
})

export default styles
