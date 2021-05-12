import React from 'react';
import { Pressable, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const getIconStyle = color => {
  if (color === 'primary') {
    return styles.lightIcon;
  } else {
    return styles.darkIcon;
  }
};

const CircleButton = ({ color, size, handlePress }) => {
  return (
    <Pressable style={({ pressed }) => [
      styles.circle,
      styles[color],
      styles[size],
      { opacity: pressed ? 0.8 : 1 }
    ]}
    onPress={handlePress}
    >
      <Image 
        source={
          color === 'primary' ? 
            require('../../assets/add-person-light-icon.png') :
            require('../../assets/add-person-icon.png')
        }
        style={styles[`icon${size.slice(0,1).toUpperCase() + size.slice(1)}`]}
      />

    </Pressable>
  );
};

CircleButton.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  handlePress: PropTypes.func
};

export { CircleButton };
