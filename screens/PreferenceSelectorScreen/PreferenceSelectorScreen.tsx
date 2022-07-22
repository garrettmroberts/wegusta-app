import React, { useEffect } from 'react';
import { View, SafeAreaView } from 'react-native';
import { ref, getStorage, getDownloadURL } from 'firebase/storage';

import CardStack from '../../components/CardStack/CardStack';
import Card from '../../components/Card/Card';
import DecisionButton from '../../components/DecisionButton/DecisionButton';
import styles from './styles';

import { useStoreContext } from '../../utils/Context';

const PreferenceSelectorScreen = () => {
  const [context, dispatch] = useStoreContext();
  useEffect(() => {
    dispatch({});
    // const storage = getStorage();
    // getDownloadURL(ref(storage, 'gs://wegusta-app.appspot.com/foods/barbeque/barbeque-1.jpeg'))
    // .then((url) => {
    //   console.log(url);
    // })
    // .catch((error) => {
    //   console.log(error)
    // });
  }, []);

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
