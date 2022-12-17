import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import Sizes from '../../constants/Sizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white
  },
  absolute: {
    position: 'absolute',
    zIndex: 2,
    width: Sizes.screenWidth,
    height: Sizes.screenHeight
  },
  loadingText: {
    ...Fonts.h1Bold,
    marginTop: 21
  },
  tryAgainBlock: {
    position: 'absolute',
    bottom: 34,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16
  },
  tryAgainText: {
    color: Colors.primary,
    marginRight: 12,
    ...Fonts.buttonReg
  },
  resultCardWrapper: {
    width: Sizes.screenWidth - (Sizes.viewPadding * 2)
  }
});

export default styles;
