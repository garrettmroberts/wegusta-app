import React from 'react';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import PropTypes from 'prop-types';

import styles from './styles';
import { colors } from '../../config';

const iconSize = (size) => {
  if (size === 'large') {
    return 22.5;
  } else if (size === 'medium') {
    return 15;
  } else {
    return 11.25;
  }
};

const iconColor = (color) => {
  if (color === 'primary') {
    return colors.white;
  } else {
    return colors.primary;
  }
};

const IconButton = ({ color, size, icon, handlePress }) => {
  return (
    <Pressable style={({ pressed }) => [
      styles.circle,
      styles[color],
      styles[size],
      { opacity: pressed ? 0.8 : 1 }
    ]}
    onPress={handlePress}
    >
      <Ionicons name={ icon } color={iconColor(color)} size={iconSize(size)} />
    </Pressable>
  );
};

IconButton.propTypes = {
  color: PropTypes.string.isRequired, // primary, secondary
  size: PropTypes.string.isRequired, // large, medium, small, xsmall
  handlePress: PropTypes.func,
  icon: PropTypes.string.isRequired
};

export { IconButton };
