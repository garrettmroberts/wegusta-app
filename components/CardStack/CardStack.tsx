import { useState } from 'react';
import { View } from 'react-native';

import Card from '../Card/Card';
import SwipeableEntity from '../SwipeableEntity/SwipeableEntity';
import styles from './styles';

type Props = {
  cards: any;
};

const CardStack = ({ cards }: Props) => {
  const handleSwipe = () => {
    // TODO: Handle preference state change
  };

  return (
    <View style={styles.wrapper}>
      {cards.map((cardProps: any, idx: number) => {
        return (
          <SwipeableEntity
            key={`card-${idx}`}
            onSwipeLeft={handleSwipe}
            onSwipeRight={handleSwipe}
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
