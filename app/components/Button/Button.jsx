import React, { useRef } from 'react';
import { View, Text, Pressable, Animated } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { fonts } from '../../config';

const Button = ({ type, size, icon, iconPlacement, text, handlePress }) => {
  const startHeight = (size) => {
    switch(size) {
    case 'small':
      return 32;
    case 'medium':
      return 40;
    default:
      return 48;
    }
  };

  const getTextStyle = (type) => {
    if (type === 'primary' || type === 'destructive') {
      return [fonts.button, styles.text];
    } else if (type === 'secondary' || type === 'tertiary') {
      return [fonts.button, styles.darkText, styles.text];
    } else {
      return [fonts.button, styles.grayText, styles.text];
    }
  };

  const formatContent = (icon, iconPlacement, text, type ) => {
    if (icon) {
      switch (iconPlacement) {
      case 'left':
        return (
          <View style={styles.contentWrapper}>
            { icon }
            <Text style={ getTextStyle(type) }>{ text }</Text>
          </View>
        );
      case 'right':
        return (
          <View style={styles.contentWrapper}>
            <Text style={ getTextStyle(type) }>{ text }</Text>
            { icon }
          </View>
        );
      case 'both':
        return (
          <View style={styles.contentWrapper}>
            { icon }
            <Text style={ getTextStyle(type) }>{ text }</Text>
            { icon }
          </View>
        );
      default:
        return <Text style={ getTextStyle(type) }>{ text }</Text>;
      };
      
    }
  };

  const heightAnim = useRef(new Animated.Value(startHeight(size))).current;
  const paddingHorizAnim = useRef(new Animated.Value(32)).current;

  const expand = (size) => {
    Animated.timing(heightAnim, {
      toValue: startHeight(size) + 3,
      duration: 300,
      useNativeDriver: false
    }).start();

    if (size !== 'fullWidth') {
      Animated.timing(paddingHorizAnim, {
        toValue: 35,
        duration: 300,
        useNativeDriver: false
      }).start();
    }
  };
  
  const compact = (size) => {
    Animated.timing(heightAnim, {
      toValue: startHeight(size),
      duration: 300,
      useNativeDriver: false
    }).start();

    if (size !== 'fullWidth') {
      Animated.timing(paddingHorizAnim, {
        toValue: 32,
        duration: 300,
        useNativeDriver: false
      }).start();
    }
  };

  return (
    <Animated.View style={[
      styles.centered, 
      styles[type], 
      styles[size],
      size === 'small' ? styles.buttonSmall : styles.buttonReg,
      { 
        height: heightAnim,
        paddingHorizontal: paddingHorizAnim
      }
    ]}>
      <Pressable 
        style={[styles.centered, styles.stretch]} 
        onPress={ handlePress } 
        onPressIn={() => expand(size)}
        onPressOut={() => compact(size)}
      >
        { formatContent(icon, iconPlacement, text, type )}
      </Pressable>
    </Animated.View>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired, // primary, secondary, tertiary, disabled, destructive
  size: PropTypes.string.isRequired, // fullWidth, large, medium, small
  icon: PropTypes.element, // icon element.  Preferably sized around 30
  iconPlacement: PropTypes.string, // left, right, both, none
  text: PropTypes.string,
  handlePress: PropTypes.func

};

export { Button };
