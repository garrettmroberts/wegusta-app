import { StyleSheet } from 'react-native';
import { colors, constants, fonts } from '../../config';

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  primary: {
    backgroundColor: colors.buttonPrimary
  },
  secondary: {
    backgroundColor: colors.buttonSecondary
  },
  tertiary: {
    backgroundColor: colors.white
  },
  disabled: {
    backgroundColor: colors.buttonSecondary
  },
  destructive: {
    backgroundColor: colors.buttonDestructive
  },
  fullWidth: {
    height: 48,
    width: '100%',
    paddingHorizontal: 24
  },
  large: {
    height: 48,
    paddingHorizontal: 32
  },
  medium: {
    height: 40,
    paddingHorizontal: 32
  },
  small: {
    height: 32,
    paddingHorizontal: 32
  },
  text: {
    marginHorizontal: 10
  },
  darkText: {
    color: colors.black
  },
  grayText: {
    color: colors.disabledGray
  }
});

export default styles;
