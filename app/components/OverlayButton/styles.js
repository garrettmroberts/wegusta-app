import { StyleSheet } from 'react-native';
import { colors } from '../../config';

const styles = StyleSheet.create({
  icon: {
    height: 32,
    width: 32,
    borderRadius: 90,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dark: {
    backgroundColor: colors.darkButton
  },
  light: {
    backgroundColor: colors.white
  },
  overlay: {
    height: 20,
    width: 20,
    resizeMode: 'contain'
  },
  overlaySmall: {
    height: 15,
    width: 15,
    resizeMode: 'contain'
  }
});

export default styles;
