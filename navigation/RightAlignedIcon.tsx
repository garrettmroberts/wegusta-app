import { Image, Pressable, StyleSheet } from 'react-native'
import Icons from '../utils/Icons'



type RightAlignedIconProps = {
    iconName: string,
    onPress: () => void
}

const RightAlignedIcon = ({ iconName, onPress }: RightAlignedIconProps) => {
  return (
    <Pressable onPress={() => onPress()}>
      <Image
        source={Icons[iconName]}
        style={styles.icon}
      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  icon: {
    height: 21,
    width: 21
  }
})

export default RightAlignedIcon