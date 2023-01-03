import { Image, View } from 'react-native'
import styles from './styles'

type Props = {
  rating: number;
};

const StarRating = ({ rating }: Props) => {
  return (
    <View style={styles.container}>
      {Array.from(Array(5).keys()).map(idx => {
        if (idx < Math.floor(rating)) {
          return (
            <Image
              source={require('../../assets/images/star.png')}
              style={styles.star}
              key={`star-${idx}`}
            />
          )
        } else if (rating - idx <= 1 && idx < rating) {
          return (
            <Image
              source={require('../../assets/images/star-half.png')}
              style={styles.star}
              key={`star-${idx}`}
            />
          )
        } else {
          return (
            <Image
              source={require('../../assets/images/star-empty.png')}
              style={styles.star}
              key={`star-${idx}`}
            />
          )
        }
      })}
    </View>
  )
}

export default StarRating
