import { StyleSheet } from 'react-native';
import { colors, constants } from '../../config';

const styles = StyleSheet.create({
  buttonDefault: {
    backgroundColor: colors.primary,
    height: 48,
    width: constants.screenWidth - 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12
  },
  buttonCard: {
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    margin: 16,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  buttonIcon: {
    backgroundColor: colors.black,
    height: 32,
    width: 96,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 12,
    marginRight: 20
  }
});

export default styles;
