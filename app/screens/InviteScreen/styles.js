import { StyleSheet } from 'react-native';
import { fonts, colors, constants } from '../../config';

const styles = StyleSheet.create({
  centered: {
    width: constants.screenWidth,
    alignItems: 'center'
  },
  nextBtn: {
    position: 'absolute',
    bottom: 50
  },
  wrapper: {
    height: constants.viewHeight
  },
  spacer: {
    height: 70
  }
});

export default styles;
