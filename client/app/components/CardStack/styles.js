import { StyleSheet } from 'react-native';
import { constants } from '../../config';

const styles = StyleSheet.create({
  card: {
    height: constants.screenHeight - 300,
    width: constants.screenWidth,
    padding: 10,
    position: 'absolute'
  }, 
  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'cover',
    borderRadius: 20
  }
});

export default styles;
