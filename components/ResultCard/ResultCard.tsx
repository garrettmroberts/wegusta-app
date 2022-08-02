import { Text, View, ImageBackground } from 'react-native';
import styles from './styles';

const ResultCard = () => {
  return (
    <View style={styles.card}>
      <ImageBackground
        resizeMode="cover"
        source={{ uri: 'https://picsum.photos/200/300' }}
        style={styles.image}
      />
      <View style={styles.textWrapper}>
        <Text style={styles.titleText}>Hopp Doddie</Text>
        <Text>Rating</Text>
        <Text>Distance, time till close, $$</Text>
        <Text>Sample descriptive info...</Text>
      </View>
    </View>
  );
};

export default ResultCard;
