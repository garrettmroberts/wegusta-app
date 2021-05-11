import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { fonts } from '../../config';

const getTextStyle = (type) => {
  if (type === 'primary' || type === 'destructive') {
    return fonts.button;
  } else if (type === 'secondary' || type === 'tertiary') {
    return [fonts.button, styles.darkText];
  } else {
    return [fonts.button, styles.grayText];
  }
};

const Button = ({ type, size, text, children, iconBefore, iconAfter }) => {

  return (
    <Pressable style={[ styles.button, styles[type], styles[size] ]} >
      <Text style={ getTextStyle(type) }>{ text }</Text>
    </Pressable>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  text: PropTypes.string,
  children: PropTypes.element,
  iconBefore: PropTypes.element,
  iconAfter: PropTypes.element

};

export { Button };
