import { StyleSheet } from 'react-native';
import { colors, constants, fonts } from '../../config';

const styles = StyleSheet.create({
  slider: {
    width: constants.screenWidth - constants.viewPadding * 2
  },
  labelWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: constants.screenWidth - constants.viewPadding * 2
  },
  title: {
    ...fonts.bodyBold,
    color: colors.greyDark,
    marginLeft: 3
  },
  text: {
    ...fonts.bodyReg,
    marginLeft: 4
  }
});

export default styles;
