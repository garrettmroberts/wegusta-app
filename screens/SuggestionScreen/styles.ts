import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white
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
  }
});

export default styles;
