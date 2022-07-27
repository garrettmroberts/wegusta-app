import { useEffect } from "react";
import { Animated, Easing } from "react-native"
import styles from "./styles";

const LoadingSpinner = () => {
  let rotateValueHolder = new Animated.Value(0);

  useEffect(() => {
    startImageRotateFunction();
  }, [])

  const startImageRotateFunction = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => startImageRotateFunction());
  };

  const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View
      style={[
        styles.spinner,
      {transform: [{ rotate: RotateData }]}
      ]}
    />
  );
}


export default LoadingSpinner;