import React from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import buildIcon from '../../utils/buildIcon';
import { colors } from '../../config';

const Avatar = ({ size, avatarStyle, accessory, letter, image, onPress, style }) => {
  const formatIcon = (size) => {
    switch (size) {
    case 'large':
      return buildIcon({ name: 'md-person-add', size: 35, color: colors.white });
    case 'medium':
      return buildIcon({ name: 'md-person-add', size: 28, color: colors.white });
    case 'small':
      return buildIcon({ name: 'md-person-add', size: 21, color: colors.white });
    case 'xsmall':
      return buildIcon({ name: 'md-person-add', size: 12, color: colors.white });
    case 'navSized':
      return buildIcon({ name: 'md-person-add', size: 18, color: colors.white });
    }
  };

  const accesorize = (accessory, size) => {
    if (accessory === 'checkmark' && size !== 'xsmall') {
      return (
        <View style={[styles.accessory, styles[`accessory${size}`]]}>
          { buildIcon({ name: 'checkmark', size: 20, color: colors.white }) }
        </View>
      );
    }
  };

  const setContent = (avatarStyle, size, letter, image) => {
    if (avatarStyle === 'image') {
      return <Image source={image} resizeMode="cover" style={[styles[size], styles.image]} />;
    } else if (avatarStyle === 'letter') {
      return <Text style={[styles.letter, styles[`letter${size}`]]}>{ letter }</Text>;
    } else {
      return formatIcon(size);
    }
  };

  return (
    <Pressable onPress={onPress} style={[styles[size], style ]}>
      <View style={[styles.wrapper, styles[size]]}>
        { setContent(avatarStyle, size, letter, image) }
      </View>
      { accesorize(accessory, size) }
    </Pressable>
  );
};

Avatar.propTypes = {
  size: PropTypes.string.isRequired, // large, medium, small, xsmall, navSized
  avatarStyle: PropTypes.string, // image, letter
  letter: PropTypes.string, // Only required if avatarStyle === 'letter'
  image: PropTypes.object, // Only required if avatarStyle === 'image'.  Check react-native Image docs for example
  accessory: PropTypes.string, // checkmark
  onPress: PropTypes.func,
  style: PropTypes.object // Optional extra styles.  Applied to main wrapper.
};

export default Avatar;
