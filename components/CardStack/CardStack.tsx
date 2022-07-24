import { useState } from 'react';
import { View } from 'react-native';

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
  const handleSwipe = () => {
    // TODO: Handle preference state change
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
