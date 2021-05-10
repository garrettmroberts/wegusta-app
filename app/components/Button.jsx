import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Feather } from '@expo/vector-icons';

import { colors, fonts, constants } from '../config';

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

const styles = StyleSheet.create({
  buttonDefault: {
    backgroundColor: colors.primary,
    height: 48,
    width: constants.screenWidth - 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12
  },
  buttonCard: {
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    margin: 16,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  buttonIcon: {
    backgroundColor: colors.black,
    height: 32,
    width: 96,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 12,
    marginRight: 20
  }
});

export default Button;
