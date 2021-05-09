import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useStoreContext } from '../utils/Context';
import {colors } from '../config';

import Button from '../components/Button';
import CardButton from '../components/CardButton';

const HomeScreen = () => {
  const [ state, dispatch ] = useStoreContext();

  return (
    <View style={styles.container} >
      <Text>{ state.text }</Text>
      <Button text="Ballyhoo" />
      <CardButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.greyLight
  }
});

export default HomeScreen;
