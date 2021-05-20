import React from 'react';
import { Pressable, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const OverlayButton = ({ dark, overlay, handlePress }) => {
  let buttonStyle = dark => dark === true ? 'dark' : 'light';

  const icon = (dark, overlay) => {
    if (overlay === 'more' && dark) {
      return <Image source={require('../../assets/ellipsis.png')} style={styles.overlay} />;
    } else if (overlay === 'more' && !dark) {
      return <Image source={require('../../assets/ellipsis-dark.png')} style={styles.overlay} />;
    } else if (overlay === 'search' && dark) {
      return <Image source={require('../../assets/search-white.png')} style={styles.overlaySmall} />;
    } else if (overlay === 'search' && !dark) {
      return <Image source={require('../../assets/search.png')} style={styles.overlaySmall} />;
    } else if (overlay === 'close' && dark) {
      return <Image source={require('../../assets/x-white.png')} style={styles.overlaySmall} />;
    } else {
      return <Image source={require('../../assets/x-icon.png')} style={styles.overlaySmall} />;
    }
  };
  
  return (
    <Pressable style={ ({ pressed }) => [
      styles[buttonStyle(dark)],
      styles.icon,
      { opacity: pressed ? 0.8 : 1 }
    ]} onPress={handlePress} >
      { icon(dark, overlay) }
    </Pressable>
  );
};

OverlayButton.propTypes = {
  dark: PropTypes.bool,
  overlay: PropTypes.string.isRequired,
  handlePress: PropTypes.func
};

export { OverlayButton };
