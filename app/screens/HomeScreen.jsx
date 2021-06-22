import React from 'react';
import { View, FlatList, ScrollView, Text, StyleSheet } from 'react-native';
import { useStoreContext } from '../utils/Context';
import { colors } from '../config';
import { Feather, Ionicons } from '@expo/vector-icons';

import { Button, SocialButton, IconButton, DecisionButton, OverlayButton, SearchInput } from '../components';

const handlePress = () => { console.log('pressed'); };
const HomeScreen = () => {
  const [state, dispatch] = useStoreContext();

  const addPersonIcon = <Ionicons name="person-add" size={24} color="white" />;
  const addPersonIconSmall = <Ionicons name="person-add" size={11} color="white" />;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          <Text style={styles.header}>Colors</Text>
          <View style={styles.section}>
            <View style={[styles.colorSquare, { backgroundColor: colors.primary }]} >
              <Text style={{ color: colors.white }}>primary</Text>
            </View>
            <View style={[styles.colorSquare, { backgroundColor: colors.greyDark }]} >
              <Text>greyDark</Text>
            </View>
            <View style={[styles.colorSquare, { backgroundColor: colors.grey }]} >
              <Text>grey</Text>
            </View>
            <View style={[styles.colorSquare, { backgroundColor: colors.greyLight }]} >
              <Text>greyLight</Text>
            </View>
            <View style={[styles.colorSquare, { backgroundColor: colors.white }]} >
              <Text>white</Text>
            </View>
            <View style={[styles.colorSquare, { backgroundColor: colors.success }]} >
              <Text>success</Text>
            </View>
            <View style={[styles.colorSquare, { backgroundColor: colors.warning }]} >
              <Text>warning</Text>
            </View>
            <View style={[styles.colorSquare, { backgroundColor: colors.error }]} >
              <Text>error</Text>
            </View>
            <View style={[styles.colorSquare, { backgroundColor: colors.facebookBlue }]} >
              <Text>facebookBlue</Text>
            </View>
          </View>
        </View>
        <Button type="primary" size="fullWidth" iconPlacement="left" text="Codename LLC" handlePress={handlePress} icon="person-add" />
        <Button type="secondary" size="large" iconPlacement="right" text="Codename LLC" handlePress={handlePress} icon="person-add" />
        <Button type="disabled" size="medium" iconPlacement="both" text="Codename LLC" handlePress={handlePress} icon="person-add" />
        <Button type="destructive" size="small" text="Codename LLC" handlePress={handlePress} icon="person-add" />

        <SocialButton icon="facebook" handlePress={handlePress} />
        <DecisionButton decision="like" />
        <DecisionButton decision="dislike" />
        <OverlayButton dark={true} overlay="more" />
        <OverlayButton dark={false} overlay="search" />
        <OverlayButton dark={true} overlay="close" />
        <SearchInput placeholder='Search' />
        <SearchInput placeholder='Search' disabled={true} />
        <IconButton size="large" color="primary" icon="person-add" handlePress={handlePress} />
        <IconButton size="medium" color="primary" icon="person-add" handlePress={handlePress} />
        <IconButton size="small" color="error" icon="person-add" handlePress={handlePress} />
        <IconButton size="xsmall" color="error" icon="person-add" handlePress={handlePress} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    color: colors.white,
    fontWeight: '700'
  },
  // eslint-disable-next-line react-native/no-color-literals
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  // eslint-disable-next-line react-native/no-color-literals
  container: {
    flex: 1,
    backgroundColor: '#6546F9'
  },
  section: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15

  },
  colorSquare: {
    height: 70,
    width: 70,
    margin: 2
  }
});

export default HomeScreen;
