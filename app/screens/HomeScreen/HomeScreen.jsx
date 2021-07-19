import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

import Button from '../../components/Button/Button';
import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/homescreenBackground.png')} resizeMode="cover" style={styles.image}>
        <View style={styles.wrapper}>
          <Text style={styles.header}>No more nose goes...</Text>
          <Text style={styles.subtext}>Find the perfect restaurant for everyone.</Text>
          <Button type='primary' size='large' text='Make Plans' iconPlacement="right" icon="arrow-forward" />
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
