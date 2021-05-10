import React from 'react';
import { View, Text, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import { Feather } from '@expo/vector-icons';

import { colors, fonts } from '../../config';
import styles from './styles';

const Button = props => {
  let content; 
  if (props.type === 'card') {
    content = <Feather name="feather" size={40} color={colors.white} />;
  } else if (props.type === 'icon') {
    content = (
      <View>
        <Feather name="plus" size={20} color={colors.white} />
        <Text style={fonts.button}>{props.text || '' }</Text>
      </View>
    );
  } else {
    content = <Text style={ fonts.button }>{ props.text || '' }</Text>;
  }

  return (
    <Pressable { ...props }
      style={ ({pressed}) => [
        {
          opacity: pressed ? 0.8 : 1
        }
      ]}
    >
      <View style={[
        props.type === 'default' || !props.type ? styles.buttonDefault : '',
        props.type === 'card' ? styles.buttonCard : '',
        props.type === 'icon' ? styles.buttonIcon : ''
      ]}>
        { content }
      </View>
    </Pressable>
  );
};

Button.propTypes = {
  text: PropTypes.string, // Required when type='default' or type='icon'
  type: PropTypes.string,
  handlePress: PropTypes.func
};

export { Button };
