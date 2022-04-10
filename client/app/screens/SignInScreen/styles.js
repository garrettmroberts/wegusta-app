import { StyleSheet } from 'react-native';
import { colors, constants, fonts } from '../../config';

const styles = StyleSheet.create({
  wrapper: {
    height: constants.viewHeight,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    backgroundColor: colors.greyLight,
    width: constants.screenWidth - (constants.viewPaddingSmall * 2),
    height: 56
  }
});

export default styles;
