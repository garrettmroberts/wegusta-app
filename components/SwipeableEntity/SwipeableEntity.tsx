import { ReactNode, useState } from 'react';
import { useRef } from 'react';
import { Animated, View, PanResponder } from 'react-native';

import Sizes from '../../constants/Sizes';

type Props = {
  children?: ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
};

const SwipeableEntity = ({ children, onSwipeLeft, onSwipeRight }: Props) => {
  const [visible, setVisible] = useState(true);
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          //@ts-ignore
          x: pan.x._value,
          //@ts-ignore
          y: pan.y._value
        });
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false
      }),
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx < -120) {
          Animated.spring(pan, {
            toValue: {
              x: -Sizes.screenWidth - 100,
              y: gestureState.dy
            },
            useNativeDriver: false
          }).start(() => {
            pan.setValue({ x: 0, y: 0 });
          });
          if (onSwipeLeft) onSwipeLeft();
          setTimeout(() => setVisible(false), 200);
        } else if (gestureState.dx > 120) {
          Animated.spring(pan, {
            toValue: {
              x: Sizes.screenWidth + 100,
              y: gestureState.dy
            },
            useNativeDriver: false
          }).start(() => {
            pan.setValue({ x: 0, y: 0 });
          });
          if (onSwipeRight) onSwipeRight();
          setTimeout(() => setVisible(false), 200);
        } else {
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            friction: 4,
            useNativeDriver: false
          }).start();
        }
      }
    })
  ).current;

  return visible ? (
    <Animated.View
      style={{
        transform: [{ translateX: pan.x }, { translateY: pan.y }]
      }}
      {...panResponder.panHandlers}
    >
      {children}
    </Animated.View>
  ) : (
    <View />
  );
};

export default SwipeableEntity;
