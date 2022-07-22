import React, { useContext, useEffect } from 'react';
import { View, SafeAreaView } from 'react-native';
import { ref, getStorage, getDownloadURL } from 'firebase/storage';
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where
} from 'firebase/firestore';

import CardStack from '../../components/CardStack/CardStack';
import Card from '../../components/Card/Card';
import DecisionButton from '../../components/DecisionButton/DecisionButton';
import styles from './styles';
import FirestoreAPI from '../../api/firestore';

import { AppContext } from '../../utils/Context/Context';

const PreferenceSelectorScreen = () => {
  const { state, dispatch } = useContext(AppContext);
  useEffect(() => {
    const getFoods = async () => {
      const res = await FirestoreAPI.getFoodCategoriesWithPictures();
      console.log(res);
    };

    getFoods();

    // ADD IMAGES TO CONTEXT
    // dispatch({type: 'addImages', payload: ['x', 'y', 'z']});
    // const storage = getStorage();

    // GET SELECTED IMAGES BY URL
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
