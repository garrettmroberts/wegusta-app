import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useStoreContext } from '../utils/Context';
import { colors } from '../config';
import { Feather } from '@expo/vector-icons';

import { Button, SocialButton, CircleButton, DecisionButton } from '../components';

const handlePress = () => {console.log('pressed');};
const HomeScreen = () => {
  const [ state, dispatch ] = useStoreContext();

  const icon = <Feather name="feather" height={30} />;

  return (
    <View style={styles.container} >
      <Button type="primary" size="fullWidth" text="Codename LLC" handlePress={handlePress} iconBefore={icon} />
      <SocialButton icon="facebook" handlePress={handlePress} />
      <CircleButton size="large" color="primary" handlePress={handlePress} />
      <DecisionButton decision="like" />
      <DecisionButton decision="dislike" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary
  }
});

export default HomeScreen;
