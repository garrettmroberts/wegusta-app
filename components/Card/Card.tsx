import {
  Animated,
  ImageBackground,
  ImageSourcePropType,
  View
} from 'react-native';

import styles from './styles';

type CardProps = {
  imageProps: {
    category: string;
    uri: string;
  };
};

const Card = ({ imageProps }: CardProps) => {
  const imageFadeIn = new Animated.Value(0);

  const handleImageLoad = () => {
    Animated.timing(imageFadeIn, {
      toValue: 1,
      useNativeDriver: false
    }).start();
  };

  return (
    <View style={styles.cardContainer}>
      <Animated.View style={[styles.card, { opacity: imageFadeIn }]}>
        <ImageBackground
          resizeMode="cover"
          style={styles.image}
          source={{ uri: imageProps.uri }}
          onLoad={() => handleImageLoad()}
        />
      </Animated.View>
    </View>
  );
};

export default Card;
