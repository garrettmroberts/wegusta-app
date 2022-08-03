import { Text, View, ImageBackground } from 'react-native';
import styles from './styles';

const ResultCard = () => {
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
        <Text style={styles.titleText}>Hop Doddie</Text>
        <Text>Rating</Text>
        <Text style={styles.description1}>Distance, time till close, $$</Text>
        <Text style={styles.description2}>Sample descriptive info...</Text>
      </View>
    </View>
  );
};

export default ResultCard;
