import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import PropTypes from 'prop-types';

import styles from './styles';
import { fonts, colors } from '../../config';
import buildIcon from '../../utils/buildIcon';

const Button = ({ type, size, icon, iconPlacement, text, handlePress }) => {
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

    return buildIcon({name: icon, color: color, size: 24});
  };

  const formatContent = (icon, iconPlacement, text, type ) => {
    if (icon) {
      switch (iconPlacement) {
      case 'left':
        return (
          <View style={styles.contentWrapper}>
            { iconGen(icon, type) }
            <Text style={getTextStyle(type)}>{ text }</Text>
          </View>
        );
      case 'right':
        return (
          <View style={styles.contentWrapper}>
            <Text style={ getTextStyle(type) }>{ text }</Text>
            { iconGen(icon, type) }
          </View>
        );
      case 'both':
        return (
          <View style={styles.contentWrapper}>
            { iconGen(icon, type) }
            <Text style={ getTextStyle(type) }>{ text }</Text>
            { iconGen(icon, type) }
          </View>
        );
      default:
        return <Text style={ getTextStyle(type) }>{ text }</Text>;
      };
      
    }
  };

  const buttonMain = (
    <View style={[
      styles.centered,
      styles[type],
      styles[size],
      size === 'small' ? styles.buttonSmall : styles.buttonReg
    ]}>
      { formatContent(icon, iconPlacement, text, type )}
    </View>
  );

  const wrappedButton = (type) => {
    if (type === 'disabled') {
      return buttonMain;
    } else {
      return (
        <Pressable
          onPress={ handlePress }
          style={({ pressed }) => [
            styles.centered,
            { opacity: pressed ? 0.8 : 1 }
          ]}
        >
          { buttonMain }
        </Pressable>
      );
    }
  };

  return wrappedButton(type);
};

Button.propTypes = {
  type: PropTypes.string.isRequired, // primary, secondary, tertiary, disabled, destructive
  size: PropTypes.string.isRequired, // fullWidth, large, medium, small
  icon: PropTypes.string.isRequired,
  iconPlacement: PropTypes.string, // left, right, both, none
  text: PropTypes.string,
  handlePress: PropTypes.func

};

export { Button };
