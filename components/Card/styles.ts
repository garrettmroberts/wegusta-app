import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Sizes from '../../constants/Sizes';

const styles = StyleSheet.create({
  card: {
    // height: Sizes.screenHeight - 300,
    height: 440,
    width: Sizes.screenWidth,
    padding: 10,
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: Colors.white
  },
  spinner: {
    position: 'absolute',
    width: Sizes.screenWidth,
    flex: 1,
    alignItems: 'center'
  }
});

export default styles;
