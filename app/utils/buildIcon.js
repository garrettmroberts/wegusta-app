import React from 'react';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const buildIcon = ({ name, color, size }) => {
  if (['star', 'star-half'].includes(name)) {
    return <FontAwesome name={name} color={color} size={size} />;
  } else {
    return <Ionicons name={name} color={color} size={size} />;
  }
};

export default buildIcon;
