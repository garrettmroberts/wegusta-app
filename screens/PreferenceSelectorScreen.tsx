import React from 'react'
import { View, Image, Text } from 'react-native'
import DecisionButton from '../components/DecisionButton/DecisionButton'

const PreferenceSelectorScreen = () => {
  return (
    <>
      <Text>Hello</Text>
      <DecisionButton decision='like' />
      <DecisionButton decision='dislike' />
    </>
  )
}

export default PreferenceSelectorScreen