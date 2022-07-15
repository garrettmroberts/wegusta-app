import { StyleSheet } from 'react-native';
import Sizes from '../../constants/Sizes';

const styles = StyleSheet.create({
  card: {
    height: Sizes.screenHeight - 300,
    width: Sizes.screenWidth,
    padding: 10,
    position: 'absolute'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 20
  }
});

export default styles;
