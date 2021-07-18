import React from 'react';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const buildIcon = ({ name, color, size, onPress }) => {
  if (['star', 'star-half'].includes(name)) {
    return <FontAwesome name={name} color={color} size={size} onPress={onPress} />;
  } else {
    return <Ionicons name={name} color={color} size={size} onPress={onPress} />;
  }
};

export default buildIcon;
