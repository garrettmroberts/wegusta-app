import { ReactNode, useContext, useEffect, useState } from 'react';
import { useRef } from 'react';
import { Animated, View, PanResponder } from 'react-native';

import Sizes from '../../constants/Sizes';
import { AppContext } from '../../utils/Context/Context';

type Props = {
  children: ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipe?: () => void;
  containsElement: any;
};

const SwipeableEntity = ({
  children,
  onSwipeLeft,
  onSwipeRight,
  onSwipe,
  containsElement
}: Props) => {
  const { context, dispatch } = useContext(AppContext);
  const [visible, setVisible] = useState(true);
  const pan = useRef<any>(new Animated.ValueXY()).current;

  useEffect(() => {
    if (
      context.nextAction.isSet &&
      context.nextAction.isLiked &&
      containsElement === context.nextAction.category
    ) {
      Animated.spring(pan, {
        toValue: {
          x: Sizes.screenWidth + 100,
          y: 0
        },
        useNativeDriver: false
      }).start(() => {
        pan.setValue({ x: 0, y: 0 });
      });
      setTimeout(() => setVisible(false), 200);
      setTimeout(() => {
        dispatch({
          type: 'updateUserPreferences',
          payload: {
            category: context.nextAction.category,
            isLiked: context.nextAction.isLiked
          }
        });
        dispatch({ type: 'resetNextAction' });
      }, 201);
    } else if (
      context.nextAction.isSet &&
      !context.nextAction.isLiked &&
      containsElement === context.nextAction.category
    ) {
      Animated.spring(pan, {
        toValue: {
          x: -Sizes.screenWidth - 100,
          y: 0
        },
        useNativeDriver: false
      }).start(() => {
        pan.setValue({ x: 0, y: 0 });
      });
      setTimeout(() => setVisible(false), 200);
      setTimeout(() => {
        dispatch({
          type: 'updateUserPreferences',
          payload: {
            category: context.nextAction.category,
            isLiked: context.nextAction.isLiked
          }
        });
        dispatch({ type: 'resetNextAction' });
      }, 201);
    }
  }, [context]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
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
          setTimeout(() => setVisible(false), 200);
          if (onSwipeLeft) onSwipeLeft();
          if (onSwipe) onSwipe();
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
          setTimeout(() => setVisible(false), 200);
          if (onSwipeRight) onSwipeRight();
          if (onSwipe) onSwipe();
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
