import React from 'react';
import { View, SafeAreaView } from 'react-native';
import CardStack from '../../components/CardStack/CardStack';
import Card from '../../components/Card/Card';
import DecisionButton from '../../components/DecisionButton/DecisionButton';
import styles from './styles';

const PreferenceSelectorScreen = () => {
  const sampleCards = [
    <Card imageProps={{ uri: 'https://picsum.photos/200/300' }} />,
    <Card imageProps={{ uri: 'https://picsum.photos/200/300' }} />,
    <Card imageProps={{ uri: 'https://picsum.photos/200/300' }} />,
    <Card imageProps={{ uri: 'https://picsum.photos/200/300' }} />,
    <Card imageProps={{ uri: 'https://picsum.photos/200/300' }} />,
    <Card imageProps={{ uri: 'https://picsum.photos/200/300' }} />,
    <Card imageProps={{ uri: 'https://picsum.photos/200/300' }} />,
    <Card imageProps={{ uri: 'https://picsum.photos/200/300' }} />
  ];
  return (
    <SafeAreaView style={styles.wrapper}>
      <CardStack cards={sampleCards} />
      <View style={styles.decisionWrapper}>
        <DecisionButton decision="like" />
        <DecisionButton decision="dislike" />
      </View>
    </SafeAreaView>
  );
};

export default PreferenceSelectorScreen;
