import React from 'react'
import { View, Image, Text, Pressable } from 'react-native'

import styles from './styles'
import buildIcon from '../../utils/buildIcon'
import Colors from '../../constants/Colors'

type Props = {
 size: SizePropType
 avatarStyle: 'image' | 'letter',
 accessory?: 'checkmark',
 letter?: string,
 image?: object,
 onPress?: () => void,
 style?: object,
 backgroundColor?: string
}

type SizePropType = 'large' | 'medium' | 'small' | 'xsmall' | 'navSized'

const Avatar = ({
  size,
  avatarStyle,
  accessory,
  letter,
  image,
  onPress,
  style,
  backgroundColor,
}: Props) => {
  const formatIcon = (size: SizePropType) => {
    switch (size) {
    case 'large':
      return buildIcon({
        name: 'md-person-add',
        size: 35,
        color: Colors.white,
      })
    case 'medium':
      return buildIcon({
        name: 'md-person-add',
        size: 28,
        color: Colors.white,
      })
    case 'small':
      return buildIcon({
        name: 'md-person-add',
        size: 21,
        color: Colors.white,
      })
    case 'xsmall':
      return buildIcon({
        name: 'md-person-add',
        size: 12,
        color: Colors.white,
      })
    case 'navSized':
      return buildIcon({
        name: 'md-person-add',
        size: 18,
        color: Colors.white,
      })
    }
  }

  const accesorize = (size: SizePropType, accessory?: string) => {
    if (accessory === 'checkmark' && size !== 'xsmall') {
      return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <View style={[styles.accessory, styles[`accessory${size}`]]}>
          {buildIcon({
            name: 'checkmark',
            size: 20,
            color: Colors.white,
          })}
        </View>
      )
    }
  }

  const setContent = (avatarStyle: string, size: SizePropType, letter: string, image: number | object | undefined) => {
    if (avatarStyle === 'image') {
      return (
        <Image
          source={image}
          resizeMode="cover"
          style={[styles[size], styles.image]}
        />
      )
    } else if (avatarStyle === 'letter') {
      return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <Text style={[styles.letter, styles[`letter${size}`]]}>{letter}</Text>
      )
    } else {
      return formatIcon(size)
    }
  }

  return (
    <Pressable onPress={onPress} style={[styles[size], style]}>
      <View
        style={[
          styles.wrapper,
          styles[size],
          { backgroundColor: backgroundColor || Colors.grey },
        ]}
      >
        {setContent(avatarStyle, size, letter || '', image)}
      </View>
      {accesorize(size, accessory)}
    </Pressable>
  )
}



export default Avatar