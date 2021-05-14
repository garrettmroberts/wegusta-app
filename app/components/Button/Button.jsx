import React from 'react';
import { View, Text, Pressable } from 'react-native';
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

const Button = ({ type, size, icon, iconPlacement, text, handlePress }) => {
  return (
    <Pressable style={({ pressed }) => [
      styles.button, 
      styles[type], 
      styles[size], 
      size === 'small' ? styles.buttonSmall : styles.buttonReg,
      { opacity: pressed ? 0.8 : 1} ]} 
    onPress={ handlePress } 
    >
      { formatContent(icon, iconPlacement, text, type )}
    </Pressable>
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
