import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { colors, fonts, constants } from '../config';

const Button = props => {
  return (
    <Pressable { ...props }
      style={ ({pressed}) => [
        {
          opacity: pressed ? 0.8 : 1
        },
        styles.buttonStyle
      ]}
    >
      <View style={ styles.buttonStyle }>
        <Text style={ fonts.button }>{ props.text }</Text>
      </View>
    </Pressable>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handlePressIn: PropTypes.func,
  handlePressOut: PropTypes.func
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.primary,
    height: 48,
    width: constants.screenWidth - 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12
  }
});

export default Button;
