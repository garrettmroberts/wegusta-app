import { StyleSheet } from 'react-native';
import Sizes from '../../constants/Sizes';

const styles = StyleSheet.create({
  card: {
    // height: Sizes.screenHeight - 300,
    height: 440,
    width: Sizes.screenWidth,
    padding: 10
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 20,
    overflow: 'hidden'
  }
});

export default styles;
