import { StyleSheet } from 'react-native';
import { colors, constants } from '../../config';

const styles = StyleSheet.create({
  inputWrapper: {
    borderRadius: 200,
    backgroundColor: colors.greyLight,
    height: 48,
    width: constants.screenWidth - 48,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    fontSize: 18
  },
  icon:{
    marginLeft: 22,
    marginRight: 10
  }
});

export default styles;
