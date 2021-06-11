import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useStoreContext } from '../utils/Context';
import { colors } from '../config';
import { Feather, Ionicons } from '@expo/vector-icons';

import { Button, SocialButton, IconButton, DecisionButton, OverlayButton, SearchInput } from '../components';

const handlePress = () => {console.log('pressed');};
const HomeScreen = () => {
  const [ state, dispatch ] = useStoreContext();

  const addPersonIcon = <Ionicons name="person-add" size={24} color="white" />;
  const addPersonIconSmall = <Ionicons name="person-add" size={11} color="white" />;

  return (
    <View style={styles.container} >
      {/* <Button type="primary" size="fullWidth" iconPlacement="left" text="Codename LLC" handlePress={handlePress} icon={icon} />
      <Button type="secondary" size="large" iconPlacement="right" text="Codename LLC" handlePress={handlePress} icon={icon} />
      <Button type="disabled" size="medium" iconPlacement="both" text="Codename LLC" handlePress={handlePress} icon={icon} />
  <Button type="destructive" size="small" text="Codename LLC" handlePress={handlePress} icon={icon} /> */}

      <SocialButton icon="facebook" handlePress={handlePress} />
      {/* <DecisionButton decision="like" />
      <DecisionButton decision="dislike" />  */}
      <OverlayButton dark={true} overlay="more" />
      <OverlayButton dark={false} overlay="search" />
      <OverlayButton dark={true} overlay="close" />
      <SearchInput placeholder='Search' />
      <SearchInput placeholder='Search' disabled={true} />
      <IconButton size="large" color="primary" icon="person-add" handlePress={handlePress} />
      <IconButton size="medium" color="primary" icon="person-add" handlePress={handlePress} />
      <IconButton size="small" color="secondary" icon="person-add" handlePress={handlePress} />
      <IconButton size="xsmall" color="secondary" icon="person-add" handlePress={handlePress} />
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
