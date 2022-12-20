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
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7
  },
  imageWrapper: {
    overflow: 'hidden',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  },
  image: {
    height: 450,
  },
  overlayButton: {
    height: 56,
    width: overlayButtonWidth,
    backgroundColor: Colors.white,
    position: 'absolute',
    borderRadius: 16,
    bottom: overlayButtonPadding,
    justifyContent: 'center',
    alignItems: 'center'
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
