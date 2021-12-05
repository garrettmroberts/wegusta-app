import { StyleSheet } from 'react-native';
import { colors, constants } from '../../config';

const styles = StyleSheet.create({
  slider: {
    width: constants.screenWidth - constants.viewPadding * 2
  },
  labelWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: constants.screenWidth - constants.viewPadding * 2
  }
});

export default styles;
