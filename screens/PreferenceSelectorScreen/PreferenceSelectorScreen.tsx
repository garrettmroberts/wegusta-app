import React, { useContext, useEffect, useState } from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import CardStack from '../../components/CardStack/CardStack';
import DecisionButton from '../../components/DecisionButton/DecisionButton';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import styles from './styles';
import { AppContext } from '../../utils/Context/Context';
import API from '../../api';
import FilterModal from '../../components/FilterModal/FilterModal';

type Props = {
  navigation: any;
};

const PreferenceSelectorScreen = ({ navigation }: Props) => {
  const { context, dispatch } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getFoods = async () => {
      const images = await API.getRandomImages();
      dispatch({ type: 'addImages', payload: images });
    };

    getFoods();
  }, []);

  useEffect(() => {
    if (context.images.length === 0 && context.nextAction.isSet) {
      handleStackEnd();
    }
  }, [context.images]);

  const handleStackEnd = () => {
    setTimeout(() => {
      navigation.navigate('SuggestionScreen');
    }, 200);
  };

  const handleDecisionPress = (isLiked: boolean) => {
    const category = context.images[0].category;
    dispatch({
      type: 'setNextAction',
      payload: { isSet: true, category, isLiked }
    });
  };


  useEffect(() => {
    if (context.images.length > 0 && context.loadedImageCount === context.images.length) {
      setIsLoading(false);
    }
  }, [context.loadedImageCount]);

  return (
    <SafeAreaView style={styles.wrapper}>
      {isLoading ? (
        <>
          <View style={styles.loadingSpinnerPlacement}>
            <LoadingSpinner />
          </View>
        </>
      ) : null}
      <CardStack cards={context.images} onStackEnd={handleStackEnd} />
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
      <FilterModal isVisible={context.isOptionsModalVisible} onClose={() => dispatch({type: 'updateOptionsVisibility'})}/>
    </SafeAreaView>
  );
};

export default PreferenceSelectorScreen;
