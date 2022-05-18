import React from 'react'
import { Text, View, Pressable } from 'react-native'

import PropTypes from 'prop-types'

import styles from './styles'
import { fonts, colors } from '../../config'
import buildIcon from '../../utils/buildIcon'

const Button = ({
  type,
  size,
  icon,
  iconPlacement,
  text,
  style,
  handlePress,
}) => {
  const getTextStyle = (type, size) => {
    let classlist = [styles.text]

    classlist.push(size === 'small' ? fonts.buttonSmall : fonts.buttonReg)
    if (type === 'primary' || type === 'destructive') {
      classlist.push(styles.text, styles.lightText)
    } else if (type === 'secondary' || type === 'tertiary') {
      classlist.push(fonts.buttonReg, styles.darkText)
    } else {
      classlist.push(fonts.buttonReg, styles.grayText)
    }

    return classlist
  }

  const iconGen = (icon, type) => {
    let color

    if (type === 'primary' || type === 'destructive') {
      color = colors.white
    } else if (type === 'secondary' || type === 'tertiary') {
      color = colors.primary
    } else if (type === 'disabled') {
      color = colors.grey
    } else {
      color = colors.primary
    }

    return buildIcon({ name: icon, color: color, size: 24 })
  }

  const formatContent = (icon, iconPlacement, text, type) => {
    if (icon) {
      switch (iconPlacement) {
        case 'left':
          return (
            <View style={styles.contentWrapper}>
              {iconGen(icon, type)}
              <Text style={getTextStyle(type, size)}>{text}</Text>
            </View>
          )
        case 'right':
          return (
            <View style={styles.contentWrapper}>
              <Text style={getTextStyle(type, size)}>{text}</Text>
              {iconGen(icon, type)}
            </View>
          )
        case 'both':
          return (
            <View style={styles.contentWrapper}>
              {iconGen(icon, type)}
              <Text style={getTextStyle(type, size)}>{text}</Text>
              {iconGen(icon, type)}
            </View>
          )
        default:
          return <Text style={getTextStyle(type, size)}>{text}</Text>
      }
    }
  }

  const buttonMain = (
    <View
      style={[
        styles.centered,
        styles[type],
        styles[size],
        style,
        size === 'small' ? styles.buttonSmall : styles.buttonReg,
      ]}
    >
      {formatContent(icon, iconPlacement, text, type)}
    </View>
  )

  const wrappedButton = type => {
    if (type === 'disabled') {
      return buttonMain
    } else {
      return (
        <Pressable
          onPress={handlePress}
          style={({ pressed }) => [
            styles.centered,
            { opacity: pressed ? 0.8 : 1 },
          ]}
        >
          {buttonMain}
        </Pressable>
      )
    }
  }

  return wrappedButton(type)
}

Button.propTypes = {
  type: PropTypes.string.isRequired, // primary, secondary, tertiary, disabled, destructive
  size: PropTypes.string.isRequired, // fullWidth, large, medium, small
  icon: PropTypes.string.isRequired,
  iconPlacement: PropTypes.string, // left, right, both, none
  text: PropTypes.string,
  style: PropTypes.object,
  handlePress: PropTypes.func,
}

export default Button
