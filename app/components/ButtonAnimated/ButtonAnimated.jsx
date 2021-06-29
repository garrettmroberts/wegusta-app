/* eslint-disable react-native/no-unused-styles */
import React, { useRef } from 'react';
import { View, Pressable, Animated, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import PropTypes from 'prop-types';

import { fonts, constants, colors } from '../../config';

const ButtonAnimated = ({ type, size, icon, iconPlacement, text, handlePress }) => {
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

  const iconGen = (icon, type) => {
    let color;

    if (type === 'primary') {
      color = colors.white;
    } else if (type === 'secondary'|| type === 'tertiary') {
      color = colors.primary;
    } else if (type === 'disabled') {
      color = colors.grey;
    } else {
      color = colors.primary;
    }

    return <Ionicons name={icon} size={24} color={ color } />;
  };

  const formatContent = (icon, iconPlacement, text, type ) => {
    if (icon) {
      switch (iconPlacement) {
      case 'left':
        return (
          <View style={styles.contentWrapper}>
            { iconGen(icon, type) }
            <Animated.Text style={[getTextStyle(type), { fontSize: textSizeAnim}]}>{ text }</Animated.Text>
          </View>
        );
      case 'right':
        return (
          <View style={styles.contentWrapper}>
            <Animated.Text style={[getTextStyle(type), { fontSize: textSizeAnim}]}>{ text }</Animated.Text>
            { iconGen(icon, type) }
          </View>
        );
      case 'both':
        return (
          <View style={styles.contentWrapper}>
            { iconGen(icon, type) }
            <Animated.Text style={[getTextStyle(type), { fontSize: textSizeAnim}]}>{ text }</Animated.Text>
            { iconGen(icon, type) }
          </View>
        );
      default:
        return <Animated.Text style={[getTextStyle(type), { fontSize: textSizeAnim}]}>{ text }</Animated.Text>;
      };
      
    }
  };

  const heightAnim = useRef(new Animated.Value(startHeight(size))).current;
  const paddingHorizAnim = useRef(new Animated.Value(32)).current;
  const textSizeAnim = useRef(new Animated.Value(14)).current;

  const expand = (size) => {
    Animated.timing(heightAnim, {
      toValue: startHeight(size),
      duration: 150,
      useNativeDriver: false
    }).start();

    Animated.timing(textSizeAnim, {
      toValue: 14,
      duration: 150, 
      useNativeDriver: false
    }).start();

    if (size !== 'fullWidth') {
      Animated.timing(paddingHorizAnim, {
        toValue: 32,
        duration: 150,
        useNativeDriver: false
      }).start();
    }
  };
  
  const compact = (size) => {
    Animated.timing(heightAnim, {
      toValue: startHeight(size) - 3,
      duration: 150,
      useNativeDriver: false
    }).start();

    Animated.timing(textSizeAnim, {
      toValue: 12,
      duration: 150, 
      useNativeDriver: false
    }).start();

    if (size !== 'fullWidth') {
      Animated.timing(paddingHorizAnim, {
        toValue: 29,
        duration: 150,
        useNativeDriver: false
      }).start();
    }
  };

  const buttonMain = (
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
      { formatContent(icon, iconPlacement, text, type )}
    </Animated.View>
  );

  const wrappedButton = (type) => {
    if (type === 'disabled') {
      return buttonMain;
    } else {
      return (
        <Pressable
          onPress={ handlePress }
          onPressIn={() => compact(size)}
          onPressOut={() => expand(size)}
          style={[styles.centered]}
        >
          { buttonMain }
        </Pressable>
      );
    }
  };

  return wrappedButton(type);
};

ButtonAnimated.propTypes = {
  type: PropTypes.string.isRequired, // primary, secondary, tertiary, disabled, destructive
  size: PropTypes.string.isRequired, // fullWidth, large, medium, small
  icon: PropTypes.string.isRequired,
  iconPlacement: PropTypes.string, // left, right, both, none
  text: PropTypes.string,
  handlePress: PropTypes.func

};

const styles = StyleSheet.create({
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  contentWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row'
  },
  buttonSmall: {
    borderRadius: 8
  },
  buttonReg: {
    borderRadius: 12
  },
  primary: {
    backgroundColor: colors.primary
  },
  secondary: {
    backgroundColor: colors.greyLight
  },
  tertiary: {
    backgroundColor: colors.white
  },
  disabled: {
    backgroundColor: colors.greyLight
  },
  destructive: {
    backgroundColor: colors.error
  },
  fullWidth: {
    height: 48,
    width: constants.screenWidth - 32,
    paddingHorizontal: 24
  },
  large: {
    height: 48
  },
  medium: {
    height: 40
  },
  small: {
    height: 32
  },
  text: {
    marginHorizontal: 10,
    fontWeight: fonts.button.fontWeight,
    lineHeight: fonts.button.lineHeight,
    alignSelf: 'center'
  },
  darkText: {
    color: colors.primary
  },
  grayText: {
    color: colors.grey
  }
});

export { ButtonAnimated };
