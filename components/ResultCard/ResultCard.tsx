import {
  Linking,
  Platform,
  Pressable,
  Text,
  View,
  Image
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import StarRating from '../StarRating/StarRating'
import styles from './styles'
import Colors from '../../constants/Colors'

type Props = {
  title: string;
  rating: number;
  distance: number;
  imageUrl: string;
  closingTime: string;
  priceLevel: number; // 1-5
  description: string;
  latitude: number;
  longitude: number;
  onImageLoad?: () => void;
};

const ResultCard = ({
  title,
  rating,
  distance,
  imageUrl,
  closingTime,
  priceLevel,
  description,
  latitude,
  longitude,
  onImageLoad
}: Props) => {
  const openMap = () => {
    const scheme = Platform.OS === 'ios' ? 'maps:0,0?q=' : 'geo:0,0?q='
    const url = scheme + encodeURIComponent(title) + '@' + `${latitude},${longitude}`
    Linking.openURL(url)
  }

  return (
    <View style={styles.cardShadow}>
      <View style={styles.card}>
        <View style={styles.imageWrapper}>
          <Image
            resizeMode="cover"
            source={{ uri: imageUrl }}
            style={styles.image}
            onLoadEnd={() => {
              if (onImageLoad) onImageLoad()
            }}
          />
          <Pressable
            style={[styles.overlayButton, styles.overlayButton1]}
            onPress={openMap}
          >
            <MaterialIcons name="location-pin" size={30} color={Colors.primary} />
          </Pressable>
          {/* <View style={[styles.overlayButton, styles.overlayButton2]} /> */}
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.titleText}>{title}</Text>
          <StarRating rating={rating} />
          <Text style={styles.description1}>
            {distance} miles away • Open till {closingTime} •{' '}
            {'$'.repeat(priceLevel)}
          </Text>
          <Text style={styles.description2}>{description}</Text>
        </View>
      </View>
    </View>
  )
}

export default ResultCard
