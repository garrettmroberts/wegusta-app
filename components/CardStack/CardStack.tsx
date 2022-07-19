import { useState } from 'react';
import { View } from 'react-native';

import Card from '../Card/Card';
import SwipeableEntity from '../SwipeableEntity/SwipeableEntity';
import styles from './styles';

type Props = {
  cards: [typeof Card];
};

const CardStack = ({ cards }: Props) => {
  const handleSwipe = () => {
    // TODO: Handle preference state change
  };

  const [state, setState] = useState(cards);

  return (
    <View style={styles.wrapper}>
      {state.map((card, idx) => {
        return (
          <SwipeableEntity
            key={`card-${idx}`}
            onSwipeLeft={handleSwipe}
            onSwipeRight={handleSwipe}
          >
            <View style={styles.cardPlacement}>{card}</View>
          </SwipeableEntity>
        );
      })}
    </View>
  );
};

export default CardStack;
