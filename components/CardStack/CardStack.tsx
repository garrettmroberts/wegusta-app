import { ReactNode, useState } from 'react';
import { View, Text } from 'react-native';

import Card from '../Card/Card';
import SwipeableEntity from '../SwipeableEntity/SwipeableEntity';

const CardStack = () => {
  const handleSwipe = () => {
    // TODO: Handle preference state change
  };

  const [state, setState] = useState([<Card />, <Card />, <Card />]);

  return (
    <>
      {state.map((card, idx) => {
        return (
          <SwipeableEntity key={`card-${idx}`} onSwipe={handleSwipe}>
            {card}
          </SwipeableEntity>
        );
      })}
    </>
  );
};

export default CardStack;
