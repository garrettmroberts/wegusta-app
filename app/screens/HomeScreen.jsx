import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useStoreContext } from '../utils/Context';
import { colors } from '../config';

import { Button, ImageBlock } from '../components';

const HomeScreen = () => {
  const [ state, dispatch ] = useStoreContext();

  return (
    <View style={styles.container} >
      <Button text={ state.text } type="default" />
      <ImageBlock />
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
