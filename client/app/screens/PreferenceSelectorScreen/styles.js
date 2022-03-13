import { StyleSheet } from 'react-native';
import { fonts, colors, constants } from '../../config';

const styles = StyleSheet.create({
  screenWrapper: {
    backgroundColor: colors.white,
    height: constants.screenHeight,
    width: constants.screenWidth
  },
  avatarArrayWrapper: {
    marginVertical: 16,
    minHeight: 21
  },
  image: {
    borderRadius: 40,
    width: constants.screenWidth - constants.viewPadding * 2,
    shadowColor: colors.primary,
    shadowRadius: 32,
    shadowOffset: {width: 8, height: 8},
    shadowOpacity: 5
  }
});

export default styles;
