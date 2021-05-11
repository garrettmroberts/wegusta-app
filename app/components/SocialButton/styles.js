import { StyleSheet } from 'react-native';
import { colors, constants, fonts } from '../../config';

const styles = StyleSheet.create({
  socialButton: {
    borderRadius: 12,
    height: 48,
    width: 343,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: colors.greyLight,
    paddingLeft: 70
  },
  clickWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '800',
    marginLeft: 20,
    fontFamily: 'Avenir'
  },
  googleIcon: {
    height: 15,
    width: 15
  },
  facebookIcon: {
    color: colors.facebookBlue
  }
});

export default styles;
