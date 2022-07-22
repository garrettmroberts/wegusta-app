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
import StorageAPI from '../../api/storage';

const PreferenceSelectorScreen = () => {
  const { state, dispatch } = useContext(AppContext);
  useEffect(() => {
    const getFoods = async () => {
      const res = await FirestoreAPI.getRandomImages();
      const images = await StorageAPI.getImageUrls(
        res.map(({ id, photo }) => photo)
      );

      dispatch({ type: 'addImages', payload: res });
      dispatch({ type: 'setFormattedImages', payload: images });
    };

    getFoods();
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <CardStack cards={state.formattedImages} />
      <View style={styles.decisionWrapper}>
        <DecisionButton decision="like" />
        <DecisionButton decision="dislike" />
      </View>
    </SafeAreaView>
  );
};

export default PreferenceSelectorScreen;
