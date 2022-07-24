import { ImageBackground, ImageSourcePropType, View } from 'react-native';

import styles from './styles';

type CardProps = {
  imageProps: {
    category: string;
    uri: string;
  };
};

const Card = ({ imageProps }: CardProps) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={{ uri: imageProps.uri }}
      />
    </View>
  );
};

export default Card;
