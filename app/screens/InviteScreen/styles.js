import { StyleSheet } from 'react-native';
import { fonts, colors, constants } from '../../config';

const styles = StyleSheet.create({
  centered: {
    width: constants.screenWidth,
    alignItems: 'center'
  },
  buttons: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 50,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: colors.white
  },
  leftButton: {
    width: constants.screenWidth * 0.4
  },
  rightButton: {
    width: constants.screenWidth * 0.5
  },
  wrapper: {
    height: constants.viewHeight,
    backgroundColor: colors.white
  },
  spacer: {
    height: 70
  }
});

export default styles;
