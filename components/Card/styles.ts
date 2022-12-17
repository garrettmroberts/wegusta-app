import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Sizes from '../../constants/Sizes';

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.white,
    height: 440,
    borderRadius: 20,
    overflow: 'hidden'
  },
  card: {
    height: 440,
    width: Sizes.screenWidth - 20,
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    overflow: 'hidden'
  },
  spinner: {
    position: 'absolute',
    width: Sizes.screenWidth,
    flex: 1,
    alignItems: 'center'
  }
});

export default styles;
