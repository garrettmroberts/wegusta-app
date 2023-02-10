import React from 'react'
import { Ionicons, FontAwesome, Feather } from '@expo/vector-icons'

type buildIconArgs = {
  name: any,
  color: string,
  size: number,
  onPress: () => void
}

const buildIcon = ({ name, color, size, onPress }: buildIconArgs) => {
  if (['star', 'star-half'].includes(name)) {
    return (
      <FontAwesome name={name} color={color} size={size} onPress={onPress} />
    )
  } else if (['minus'].includes(name)) {
    return <Feather name={name} color={color} size={size} />
  } else {
    return <Ionicons name={name} color={color} size={size} onPress={onPress} />
  }
}

export default buildIcon