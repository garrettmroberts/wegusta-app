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
import { AppContext } from '../../utils/Context/Context';
import API from '../../api';

const PreferenceSelectorScreen = () => {
  const { state, dispatch } = useContext(AppContext);
  useEffect(() => {
    const getFoods = async () => {
      const images = await API.getRandomImages();
      dispatch({ type: 'addImages', payload: images });
      // dispatch({})
    };

    getFoods();
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <CardStack cards={state.images.map(ele => ele.image)} />
      <View style={styles.decisionWrapper}>
        <DecisionButton decision="like" />
        <DecisionButton decision="dislike" />
      </View>
    </SafeAreaView>
  );
};

export default PreferenceSelectorScreen;
