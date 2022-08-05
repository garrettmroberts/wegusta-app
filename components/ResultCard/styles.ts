import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import Sizes from '../../constants/Sizes';

const overlayButtonWidth = 56;
const overlayButtonPadding = 24;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    overflow: 'hidden'
  },
  image: {
    height: 300,
    width: Sizes.screenWidth - Sizes.viewPaddingSmall * 2
  },
  overlayButton: {
    height: 56,
    width: overlayButtonWidth,
    backgroundColor: Colors.white,
    position: 'absolute',
    borderRadius: 16,
    bottom: overlayButtonPadding
  },
  overlayButton1: {
    right: overlayButtonPadding
  },
  overlayButton2: {
    right: overlayButtonPadding * 2 + overlayButtonWidth
  },
  textWrapper: {
    padding: 24
  },
  titleText: {
    ...Fonts.h1Bold
  },
  description1: {
    ...Fonts.inputLabel
  },
  description2: {
    ...Fonts.bodyReg
  }
});

export default styles;
