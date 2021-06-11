/* eslint-disable react-native/no-color-literals */
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
    backgroundColor: 'rgba(10, 10, 10, 0.7)'
  },
  light: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)'
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
  },
  shiftLeft: {
    right: 1
  }
});

export default styles;
