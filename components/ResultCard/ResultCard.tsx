import { Text, View, ImageBackground } from 'react-native';
import StarRating from '../StarRating/StarRating';
import styles from './styles';

type Props = {
  title: string;
  rating: number;
  distance: number;
  imageUrl: string;
  closingTime: string;
  priceLevel: number; // 1-5
  description: string;
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
  onImageLoad
}: Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <ImageBackground
          resizeMode="cover"
          source={{ uri: imageUrl }}
          style={styles.image}
          onLoadEnd={() => {
            if (onImageLoad) onImageLoad();
          }}
        />
        <View style={[styles.overlayButton, styles.overlayButton1]} />
        {/* <View style={[styles.overlayButton, styles.overlayButton2]} /> */}
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.titleText}>{title}</Text>
        <StarRating rating={rating} />
        <Text style={styles.description1}>
          {distance} miles away, Open until {closingTime},{' '}
          {'$'.repeat(priceLevel)}
        </Text>
        <Text style={styles.description2}>{description}</Text>
      </View>
    </View>
  );
};

export default ResultCard;
