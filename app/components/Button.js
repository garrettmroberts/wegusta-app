import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import styleConstants from '../config/index';

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
        <Text style={ styleConstants.fonts.button }>{ props.text }</Text>
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
    backgroundColor: styleConstants.colors.primary,
    height: 48,
    width: styleConstants.constants.screenWidth - 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12
  }
});

export default Button;
