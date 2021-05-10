import { StyleSheet } from 'react-native';
import { colors, constants } from '../../config';

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  imageStyle: {
    height: (constants.screenWidth - 48) / 3,
    width: (constants.screenWidth - 48) / 3,
    borderColor: colors.white,
    borderWidth: 2,
    borderRadius: 8
  }
});

export default styles;
