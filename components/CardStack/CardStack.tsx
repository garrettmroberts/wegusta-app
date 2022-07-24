import { useContext, useState } from 'react';
import { View } from 'react-native';
import { AppContext } from '../../utils/Context/Context';

import Card from '../Card/Card';
import SwipeableEntity from '../SwipeableEntity/SwipeableEntity';
import styles from './styles';

type CardStackProps = {
  cards: {
    category: string;
    uri: string;
  }[];
};

const CardStack = ({ cards }: CardStackProps) => {
  const { state, dispatch } = useContext(AppContext);

  const handleSwipe = (category: string, isLiked: boolean) => {
    setTimeout(
      () =>
        dispatch({
          type: 'updateUserPreferences',
          payload: { category, isLiked }
        }),
      201
    );
    dispatch({});
  };

  return (
    <View style={styles.wrapper}>
      {cards
        .slice(0)
        .reverse()
        .map((cardProps: any, idx: number) => {
          return (
            <SwipeableEntity
              key={`card-${idx}`}
              onSwipeLeft={() => handleSwipe(cardProps.category, false)}
              onSwipeRight={() => handleSwipe(cardProps.category, true)}
            >
              <View style={styles.cardPlacement}>
                <Card imageProps={cardProps} />
              </View>
            </SwipeableEntity>
          );
        })}
    </View>
  );
};

export default CardStack;
