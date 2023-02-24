import { Text, View, Pressable } from 'react-native'

import styles from './styles'
import Fonts from '../../constants/Fonts'
import Colors from '../../constants/Colors'
import buildIcon from '../../utils/buildIcon'

type ButtonProps = {
  type: ButtonType,
  size: ButtonSizes,
  icon?: string,
  iconPlacement?: iconPlacementsOptions,
  text?: string,
  style?: object,
  handlePress?: () => void
}

type ButtonSizes = 'small' | 'medium' | 'large' | 'fullWidth'
type ButtonType = 'primary' |'secondary' |'tertiary' |'disabled' | 'destructive'
type iconPlacementsOptions = 'left' | 'right' | 'both' | 'none'

const Button = ({
  type,
  size,
  icon,
  iconPlacement,
  text,
  style,
  handlePress,
}: ButtonProps) => {  

  const getTextStyle = (type: ButtonType, size: ButtonSizes) => {
    const classlist = []
    classlist.push(styles.text)

    classlist.push(size === 'small' ? Fonts.buttonSmall : Fonts.buttonReg)
    if (type === 'primary' || type === 'destructive') {
      classlist.push(styles.text, styles.lightText)
    } else if (type === 'secondary' || type === 'tertiary') {
      classlist.push(Fonts.buttonReg, styles.darkText)
    } else {
      classlist.push(Fonts.buttonReg, styles.grayText)
    }

    return classlist
  }

  const iconGen = (icon: any, type: ButtonType) => {
    if (icon && iconPlacement) {
      let color
  
      if (type === 'primary' || type === 'destructive') {
        color = Colors.white
      } else if (type === 'secondary' || type === 'tertiary') {
        color = Colors.primary
      } else if (type === 'disabled') {
        color = Colors.grey
      } else {
        color = Colors.primary
      }
  
      return buildIcon({ name: icon, color: color, size: 24 })
    }
  }

  const formatContent = (type: ButtonType, text?: string, icon?: any, iconPlacement?: iconPlacementsOptions) => {
    if (icon && iconPlacement) {
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
      }
    } else {
      return <Text style={getTextStyle(type, size)}>{text}</Text>
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
      {formatContent(type, text, icon, iconPlacement)}
    </View>
  )

  const wrappedButton = (type: ButtonType) => {
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

export default Button