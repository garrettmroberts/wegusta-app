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
  onStackEnd?: () => void;
};

const CardStack = ({ cards, onStackEnd }: CardStackProps) => {
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
              onSwipe={idx === 0 ? onStackEnd : () => {}}
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
