import React from 'react';
import { Ionicons, FontAwesome, Feather } from '@expo/vector-icons';

const buildIcon = ({ name, color, size, onPress }) => {
  if (['star', 'star-half'].includes(name)) {
    return <FontAwesome name={name} color={color} size={size} onPress={onPress} />;
  } else if (['minus'].includes(name)) {
    return <Feather name={name} color={color} size={size} />;
  } else {
    return <Ionicons name={name} color={color} size={size} onPress={onPress} />;
  }
};

export default buildIcon;
