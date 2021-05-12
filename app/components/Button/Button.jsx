import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { fonts } from '../../config';

const getTextStyle = (type) => {
  if (type === 'primary' || type === 'destructive') {
    return [fonts.button, styles.text];
  } else if (type === 'secondary' || type === 'tertiary') {
    return [fonts.button, styles.darkText, styles.text];
  } else {
    return [fonts.button, styles.grayText, styles.text];
  }
};

const Button = ({ type, size, text, iconBefore, iconAfter, handlePress }) => {
  return (
    <Pressable style={({ pressed }) => [
      styles.button, 
      styles[type], 
      styles[size], 
      { opacity: pressed ? 0.8 : 1} ]} 
    onPress={ handlePress } 
    >
      { iconBefore }
      <Text style={ getTextStyle(type) }>{ text }</Text>
      { iconAfter }
    </Pressable>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  text: PropTypes.string,
  iconBefore: PropTypes.element,
  iconAfter: PropTypes.element,
  handlePress: PropTypes.func

};

export { Button };
