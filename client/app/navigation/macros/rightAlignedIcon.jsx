import React from 'react'
import { View } from 'react-native'
import { StyleSheet } from 'react-native'

import { colors } from '../../config'
import buildIcon from '../../utils/buildIcon'

import { useNavigation } from '@react-navigation/native'

const RightAlignedIcon = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.rightIconWrapper}>
      {buildIcon({
        name: 'settings-outline',
        color: colors.black,
        size: 32,
        onPress: () => {
          navigation.navigate('ComponentsDemo')
        },
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  rightIconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
})

export default RightAlignedIcon
