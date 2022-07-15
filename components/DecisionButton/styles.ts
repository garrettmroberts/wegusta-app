import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.white,
    height: 80,
    width: 80,
    borderRadius: 90,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7
  },
  icon: {
    position: 'relative',
    top: 2
  }
});

export default styles;
