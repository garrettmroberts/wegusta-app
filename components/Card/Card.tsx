import { Image, View } from 'react-native';

import styles from './styles';

const Card = () => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{ uri: 'https://picsum.photos/200/300' }}
      />
    </View>
  );
};

export default Card;
