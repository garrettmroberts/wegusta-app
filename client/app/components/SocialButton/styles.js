import { StyleSheet } from 'react-native'
import { colors, constants } from '../../config'

const styles = StyleSheet.create({
  socialButton: {
    borderRadius: 12,
    height: 48,
    width: constants.screenWidth - 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: colors.greyLight,
    paddingLeft: 70,
  },
  clickWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '800',
    marginLeft: 20,
    fontFamily: 'Avenir',
  },
  icon: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
  googleIcon: {
    height: 15,
    width: 15,
  },
  facebookIcon: {
    color: colors.facebookBlue,
  },
})

export default styles
