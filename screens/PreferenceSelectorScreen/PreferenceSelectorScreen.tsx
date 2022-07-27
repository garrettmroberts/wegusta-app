import React, { useContext, useEffect } from 'react';
import { View, SafeAreaView } from 'react-native';
import CardStack from '../../components/CardStack/CardStack';
import DecisionButton from '../../components/DecisionButton/DecisionButton';
import styles from './styles';
import { AppContext } from '../../utils/Context/Context';
import API from '../../api';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const PreferenceSelectorScreen = () => {
  const { state, dispatch } = useContext(AppContext);
  useEffect(() => {
    const getFoods = async () => {
      const images = await API.getRandomImages();
      dispatch({ type: 'addImages', payload: images });
    };

    getFoods();
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <CardStack cards={state.images} />
      <View style={styles.decisionWrapper}>
        <DecisionButton decision="like" />
        <DecisionButton decision="dislike" />
      </View>
    </SafeAreaView>
  );
};

export default PreferenceSelectorScreen;
