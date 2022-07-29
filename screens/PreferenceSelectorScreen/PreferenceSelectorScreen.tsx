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

  useEffect(() => {
    if (state.images.length === 0 && state.nextAction.isSet) {
      handleStackEnd();
    }
  }, [state.images]);

  const handleStackEnd = () => {
    navigation.navigate('SuggestionScreen');
  };

  const handleDecisionPress = (isLiked: boolean) => {
    const category = state.images[0].category;
    dispatch({
      type: 'setNextAction',
      payload: { isSet: true, category, isLiked }
    });
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <CardStack cards={state.images} onStackEnd={handleStackEnd} />
      <View style={styles.decisionWrapper}>
        <DecisionButton
          decision="dislike"
          onPress={() => handleDecisionPress(false)}
        />
        <DecisionButton
          decision="like"
          onPress={() => handleDecisionPress(true)}
        />
      </View>
    </SafeAreaView>
  );
};

export default PreferenceSelectorScreen;
