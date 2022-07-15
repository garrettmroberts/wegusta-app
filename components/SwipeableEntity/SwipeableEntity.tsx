import { ReactNode, useState } from 'react';
import { useRef } from 'react';
import { Animated, View, PanResponder } from 'react-native';

import Sizes from '../../constants/Sizes';

type Props = {
  children?: ReactNode;
  onSwipe?: () => void;
};

const SwipeableEntity = ({ children, onSwipe }: Props) => {
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
        // console.log(gestureState.dx)
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
          if (onSwipe) onSwipe();
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
          if (onSwipe) onSwipe();
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

  // const panResponder = useRef(
  //   PanResponder.create({
  //     // Ask to be the responder:
  //     onStartShouldSetPanResponder: (evt, gestureState) => true,
  //     onStartShouldSetPanResponderCapture: (evt, gestureState) =>
  //       true,
  //     onMoveShouldSetPanResponder: (evt, gestureState) => true,
  //     onMoveShouldSetPanResponderCapture: (evt, gestureState) =>
  //       true,

  //     onPanResponderGrant: (evt, gestureState) => {
  //       // The gesture has started. Show visual feedback so the user knows
  //       // what is happening!
  //       // gestureState.d{x,y} will be set to zero now
  //       pan.setOffset({
  //         x: pan.x._value,
  //         y: pan.y._value
  //       });
  //     },
  //     onPanResponderMove: (evt, gestureState) => {
  //       // The most recent move distance is gestureState.move{X,Y}
  //       // The accumulated gesture distance since becoming responder is
  //       // gestureState.d{x,y}
  //       Animated.event(
  //         [
  //           null,
  //           { dx: pan.x, dy: pan.y }
  //         ],
  //         {useNativeDriver: false}
  //       )
  //     },
  //     onPanResponderTerminationRequest: (evt, gestureState) =>
  //       true,
  //     onPanResponderRelease: (evt, gestureState) => {
  //       // The user has released all touches while this view is the
  //       // responder. This typically means a gesture has succeeded
  //       pan.flattenOffset();
  //     },
  //     onPanResponderTerminate: (evt, gestureState) => {
  //       // Another component has become the responder, so this gesture
  //       // should be cancelled
  //     },
  //     onShouldBlockNativeResponder: (evt, gestureState) => {
  //       // Returns whether this component should block native components from becoming the JS
  //       // responder. Returns true by default. Is currently only supported on android.
  //       return true;
  //     }
  //   })
  // ).current;

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
