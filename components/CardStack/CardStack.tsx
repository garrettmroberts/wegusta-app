import { ReactNode, useState } from 'react';
import { View, Text } from 'react-native';

import Card from '../Card/Card';
import SwipeableEntity from '../SwipeableEntity/SwipeableEntity';

type Props = {
  cards: [typeof Card];
};

const CardStack = ({ cards }: Props) => {
  const handleSwipe = () => {
    // TODO: Handle preference state change
  };

  const [state, setState] = useState(cards);

  return (
    <>
      {state.map((card, idx) => {
        return (
          <SwipeableEntity
            key={`card-${idx}`}
            onSwipeLeft={handleSwipe}
            onSwipeRight={handleSwipe}
          >
            {card}
          </SwipeableEntity>
        );
      })}
    </>
  );
};

export default CardStack;
