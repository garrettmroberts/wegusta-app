import React from 'react';
import { Pressable, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

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
      { icon }
    </Pressable>
  );
};

IconButton.propTypes = {
  color: PropTypes.string.isRequired, // primary, secondary
  size: PropTypes.string.isRequired, // large, medium, small, xsmall
  handlePress: PropTypes.func,
  icon: PropTypes.element.isRequired
};

export { IconButton };
