import { StyleSheet } from 'react-native';
import { colors, constants } from '../../config';

const styles = StyleSheet.create({
  box: {
    height: 24,
    width: 24,
    borderRadius: 6,
    borderWidth: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  lightBox: {
    backgroundColor:colors.greyLight,
    borderColor: colors.grey
  },
  darkBox: {
    backgroundColor: colors.primary,
    borderColor: colors.primary
  },
  disabledBox: {
    backgroundColor: colors.greyLight,
    borderColor: colors.greyLight
  }
});

export default styles;
