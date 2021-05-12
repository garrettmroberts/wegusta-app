import { StyleSheet } from 'react-native';
import { colors, constants, fonts } from '../../config';

const styles = StyleSheet.create({
  circle: {
    borderRadius: 90,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  large: {
    height: 56,
    width: 56
  },
  medium: {
    height: 40,
    width: 40
  },
  small: {
    height: 32,
    width: 32
  },
  xsmall: {
    height: 24,
    width: 24
  },
  primary: {
    backgroundColor: colors.buttonPrimary
  },
  secondary: {
    backgroundColor: colors.buttonSecondary
  },
  iconLarge: {
    height: 22.5,
    width: '100%',
    resizeMode: 'contain'
  },
  iconMedium: {
    height: 15,
    width: '100%',
    resizeMode: 'contain'
  },
  iconSmall: {
    height: 11.25,
    width: '100%',
    resizeMode: 'contain'
  },
  iconXsmall: {
    height: 11.25,
    width: '100%',
    resizeMode: 'contain'
  }
});

export default styles;
