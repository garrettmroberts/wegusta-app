/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View, Image, Animated, PanResponder } from 'react-native'
import { constants } from '../../config/index'
import styles from './styles'

const foods = [
  { id: '1', uri: require('../../assets/burger.png') },
  { id: '2', uri: require('../../assets/burger.png') },
  { id: '3', uri: require('../../assets/burger.png') },
  { id: '4', uri: require('../../assets/burger.png') },
  { id: '5', uri: require('../../assets/burger.png') },
]

export default class CardStack extends React.Component {
  constructor() {
    super()
    this.position = new Animated.ValueXY()
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({
          x: gestureState.dx,
          y: gestureState.dy,
        })
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: {
              x: constants.screenWidth + 100,
              y: gestureState.dy,
            },
            useNativeDriver: true,
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        } else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: {
              x: -constants.screenWidth - 100,
              y: gestureState.dy,
            },
            useNativeDriver: true,
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        } else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4,
            useNativeDriver: true,
          }).start()
        }
      },
    })
    this.state = {
      currentIndex: 0,
    }
    this.rotate = this.position.x.interpolate({
      inputRange: [-constants.screenWidth / 2, 0, constants.screenWidth / 2],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp',
    })
    this.rotateAndTranslate = {
      transform: [
        {
          rotate: this.rotate,
        },
        ...this.position.getTranslateTransform(),
      ],
    }
    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-constants.screenWidth / 2, 0, constants.screenWidth / 2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp',
    })
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-constants.screenWidth / 2, 0, constants.screenWidth / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: 'clamp',
    })
  }

  renderFoods() {
    return foods
      .map((item, i) => {
        if (i < this.state.currentIndex) {
          return null
        } else if (i === this.state.currentIndex) {
          return (
            <Animated.View
              {...this.PanResponder.panHandlers}
              key={i}
              style={[this.rotateAndTranslate, styles.card]}
            >
              <Image style={styles.image} source={item.uri} />
            </Animated.View>
          )
        } else {
          return (
            <Animated.View
              key={i}
              style={[
                {
                  opacity: this.nextCardOpacity,
                  transform: [{ scale: this.nextCardScale }],
                },
                styles.card,
              ]}
            >
              <Image style={styles.image} source={item.uri} />
            </Animated.View>
          )
        }
      })
      .reverse()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>{this.renderFoods()}</View>
        <View style={{ height: 60 }}></View>
      </View>
    )
  }
}
