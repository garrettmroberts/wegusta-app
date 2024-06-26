import { ReactNode, useContext, useEffect, useState } from 'react'
import { useRef } from 'react'
import { Animated, Image, Text, View, PanResponder } from 'react-native'

import Sizes from '../../constants/Sizes'
import { AppContext } from '../../utils/Context/Context'
import styles from './styles'

type Props = {
  children: ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipe?: () => void;
  containsElement: string;
  isActive: boolean
};

const SwipeableEntity = ({
  children,
  onSwipeLeft,
  onSwipeRight,
  onSwipe,
  containsElement,
  isActive
}: Props) => {
  const { context, dispatch } = useContext(AppContext)
  const [visible, setVisible] = useState(true)
  const pan = useRef<Animated.ValueXY>(new Animated.ValueXY()).current

  const rotate = pan.x.interpolate({
    inputRange: [-Sizes.screenWidth / 2, 0, Sizes.screenWidth / 2],
    outputRange: ['-10deg', '0deg', '10deg'],
    extrapolate: 'clamp'
  })

  const limitPanYHeight = pan.y.interpolate({
    inputRange: [-25, 0, 25],
    outputRange: [-25, 0, 25],
    extrapolate: 'clamp'
  })

  const likeOpacity = pan.x.interpolate({
    inputRange: [-50, 0, 50],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp'
  })

  const dislikeOpacity = pan.x.interpolate({
    inputRange: [-50, 0, 50],
    outputRange: [1, 0, 0],
    extrapolate: 'clamp'
  })

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
        tension: 10,
        useNativeDriver: false
      }).start(() => {
        pan.setValue({ x: 0, y: 0 })
      })
      setTimeout(() => setVisible(false), 200)
      setTimeout(() => {
        dispatch({
          type: 'updateUserPreferences',
          payload: {
            category: context.nextAction.category,
            isLiked: context.nextAction.isLiked
          }
        })
        dispatch({ type: 'resetNextAction' })
      }, 201)
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
        tension: 10,
        useNativeDriver: false
      }).start(() => {
        pan.setValue({ x: 0, y: 0 })
      })
      setTimeout(() => setVisible(false), 200)
      setTimeout(() => {
        dispatch({
          type: 'updateUserPreferences',
          payload: {
            category: context.nextAction.category,
            isLiked: context.nextAction.isLiked
          }
        })
        dispatch({ type: 'resetNextAction' })
      }, 201)
    }
  }, [context.nextAction])

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        Animated.event(
          [null, { dx: pan.x, dy: pan.y }],
          { useNativeDriver: false }
        )(e, gestureState)
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx < -120) {
          Animated.spring(pan, {
            toValue: {
              x: -Sizes.screenWidth - 100,
              y: gestureState.dy
            },
            tension: 10,
            useNativeDriver: false
          }).start(() => {
            pan.setValue({ x: 0, y: 0 })
          })
          setTimeout(() => setVisible(false), 200)
          if (onSwipeLeft) onSwipeLeft()
          if (onSwipe) onSwipe()
        } else if (gestureState.dx > 120) {
          Animated.spring(pan, {
            toValue: {
              x: Sizes.screenWidth + 100,
              y: gestureState.dy
            },
            tension: 10,
            useNativeDriver: false
          }).start(() => {
            pan.setValue({ x: 0, y: 0 })
          })
          setTimeout(() => setVisible(false), 200)
          if (onSwipeRight) onSwipeRight()
          if (onSwipe) onSwipe()
        } else {
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            friction: 4,
            useNativeDriver: false
          }).start()
        }
      }
    })
  ).current

  const getPanHandlers = () => {
    if (isActive) {
      return {...panResponder.panHandlers}
    }
  }

  return visible ? (
    <Animated.View
      style={[ styles.container, {
        transform: [{ translateX: pan.x }, { translateY: limitPanYHeight }, {rotate}]
      }]}
      {...getPanHandlers()}
    >
      {children}
      <View style={styles.center}>
        <Animated.View style={[styles.textWrapper, {opacity: likeOpacity}]}>
          <Image source={require('../../assets/images/yum.png')} style={styles.text}  resizeMode={'contain'} />
        </Animated.View>
        <Animated.View style={[styles.textWrapper, {opacity: dislikeOpacity}]}>
          <Image source={require('../../assets/images/yuck.png')} style={styles.text}  resizeMode={'contain'} />
        </Animated.View>
      </View>
    </Animated.View>
  ) : (
    <View />
  )
}

export default SwipeableEntity
