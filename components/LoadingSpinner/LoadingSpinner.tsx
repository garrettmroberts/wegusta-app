import { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import Colors from '../../constants/Colors';
import styles from './styles';

const LoadingSpinner = () => {
  const rotationDegree = useRef(new Animated.Value(0)).current

  Animated.loop(Animated.timing(
    rotationDegree,
    {
        toValue: 360,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true
    }
  )).start()

  return (
    <Animated.View
      style={[styles.spinner, {
        transform: [{
          rotateZ: rotationDegree.interpolate({
            inputRange: [0, 360],
            outputRange: ['0deg', '360deg']
          })
        }]
      }]}
    />
  );
};

export default LoadingSpinner;
