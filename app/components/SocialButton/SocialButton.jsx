import React from 'react';

import { Pressable, Text, Image, View } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import styles from './styles';

const renderedIcon = icon => {
  if (icon === 'facebook') {
    return <FontAwesome5 name="facebook-f" size={15} style={styles.facebookIcon} />;
  } else if (icon === 'google') {
    return <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png'}} style={styles.googleIcon} />;
  } else if (icon === 'apple') {
    return <FontAwesome5 name="apple" size={15} />;
  } else if (icon === 'email') {
    return <MaterialIcons name="email" size={15} />;
  };
};

const SocialButton = ({ icon, handlePress }) => {
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
