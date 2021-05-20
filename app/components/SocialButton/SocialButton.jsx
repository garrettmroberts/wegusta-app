import React from 'react';

import { Pressable, Text, Image, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const SocialButton = ({ icon, handlePress }) => {
  const renderedIcon = icon => {
    if (icon === 'facebook') {
      return <Image source={ require('../../assets/facebook-icon.png') } style={ styles.icon } />;
    } else if (icon === 'google') {
      return <Image source={ require('../../assets/google-icon.png') } style={ styles.icon } />;
    } else if (icon === 'apple') {
      return <Image source={ require('../../assets/apple-icon.png') } style={ styles.icon } />;
    } else if (icon === 'email') {
      return <Image source={ require('../../assets/mail-icon.png') } style={ styles.icon } />;
    };
  };
  
  return (
    <Pressable onPress={handlePress} style={ ({ pressed }) => [styles.socialButton, {
      opacity: pressed ? 0.8 : 1
    }]} >
      <View style={styles.clickWrapper} >
        {renderedIcon(icon)}
        <Text style={styles.text} >Continue with { icon.slice(0,1).toUpperCase() + icon.slice(1) }</Text>
      </View>
    </Pressable>
  );
};

SocialButton.propTypes = {
  icon: PropTypes.string.isRequired,
  handlePress: PropTypes.func
};

export { SocialButton };
