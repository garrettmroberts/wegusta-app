import { StyleSheet } from 'react-native';
import Fonts from '../../constants/Fonts';
import Sizes from '../../constants/Sizes';

const styles = StyleSheet.create({
  card: {},
  image: {
    height: 300,
    width: Sizes.screenWidth - Sizes.viewPaddingSmall * 2,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: 'hidden'
  },
  textWrapper: {},
  titleText: {
    ...Fonts.h1Bold
  }
});

export default styles;
