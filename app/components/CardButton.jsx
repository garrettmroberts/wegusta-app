import React from 'react';
import { Pressable, View, StyleSheet, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '../config';

const CardButton = props => {
  return (
    <Pressable { ...props }
      style={ ({pressed}) => [
        {
          opacity: pressed ? 0.8 : 1
        },
        styles.cardButton
      ]}
    >
      <View style={ styles.cardButton }>
        <Feather name="feather" size={40} color={colors.white} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardButton: {
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
  }
});

export default CardButton;
