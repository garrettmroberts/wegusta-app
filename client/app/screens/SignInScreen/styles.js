import { StyleSheet } from 'react-native';
import { colors, constants, fonts } from '../../config';

const styles = StyleSheet.create({
  wrapper: {
    height: constants.viewHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary
  },
  input: {
    backgroundColor: colors.greyLight,
    width: constants.screenWidth - (constants.viewPaddingSmall * 2),
    height: 56,
    borderRadius: 20,
    paddingHorizontal: 12,
    marginVertical: 12
  }
});

export default styles;
