import { Text, View, ImageBackground } from 'react-native';
import StarRating from '../StarRating/StarRating';
import styles from './styles';

type Props = {
  title: string;
  rating: number;
  distance: number;
  // closingTime: string, // TODO: Find date format from api
  dollarSign: '$' | '$$' | '$$$' | '$$$$' | '$$$$$';
  description: string;
};

const ResultCard = ({
  title,
  rating,
  distance,
  dollarSign,
  description
}: Props) => {
  return (
    <View style={styles.card}>
      <View>
        <ImageBackground
          resizeMode="cover"
          source={{ uri: 'https://picsum.photos/200/300' }}
          style={styles.image}
        />
        <View style={[styles.overlayButton, styles.overlayButton1]} />
        <View style={[styles.overlayButton, styles.overlayButton2]} />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.titleText}>{title}</Text>
        <StarRating rating={rating} />
        <Text style={styles.description1}>
          {distance} miles away, time till close, {dollarSign}
        </Text>
        <Text style={styles.description2}>{description}</Text>
      </View>
    </View>
  );
};

export default ResultCard;
