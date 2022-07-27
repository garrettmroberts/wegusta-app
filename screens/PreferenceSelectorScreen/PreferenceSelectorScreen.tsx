import React, { useContext, useEffect } from 'react';
import { View, SafeAreaView } from 'react-native';
import CardStack from '../../components/CardStack/CardStack';
import DecisionButton from '../../components/DecisionButton/DecisionButton';
import styles from './styles';
import { AppContext } from '../../utils/Context/Context';
import API from '../../api';

type Props = {
  navigation: any;
};

const PreferenceSelectorScreen = ({ navigation }: Props) => {
  const { state, dispatch } = useContext(AppContext);
  useEffect(() => {
    const getFoods = async () => {
      const images = await API.getRandomImages();
      dispatch({ type: 'addImages', payload: images });
    };

    getFoods();
  }, []);

  const handleStackEnd = () => {
    navigation.navigate('SuggestionScreen');
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <CardStack cards={state.images} onStackEnd={handleStackEnd} />
      <View style={styles.decisionWrapper}>
        <DecisionButton decision="like" />
        <DecisionButton decision="dislike" />
      </View>
    </SafeAreaView>
  );
};

export default PreferenceSelectorScreen;
