import React from 'react'
import { Pressable, View } from 'react-native'

import styles from './styles'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../constants/Colors'

type Props = {
  decision: 'like' | 'dislike',
  handlePress?: () => {}
}

const DecisionButton = ({ decision, handlePress}: Props) => {
  const icon = (decision: 'like' | 'dislike') => {
    if (decision === 'like') {
      return <Ionicons name='heart' size={50} color={Colors.error} />
    } else {
      return <Ionicons name='close' size={60} color={Colors.primary} />
    }
  }

  return (
    <Pressable
      style={({ pressed }) => [styles.button, { opacity: pressed ? 0.8 : 1 }]}
      onPress={handlePress}
    >
      <View style={styles.icon}>{icon(decision)}</View>
    </Pressable>
  )
}

export default DecisionButton