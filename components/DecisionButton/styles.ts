import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  button: {
    height: 80,
    width: 80,
    borderRadius: 90,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  like: {
    backgroundColor: `${Colors.error}20`
  },
  dislike: {
    backgroundColor: Colors.greyLight
  },
  icon: {
    position: 'relative',
    top: 2
  }
})

export default styles
