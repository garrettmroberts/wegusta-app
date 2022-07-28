import { useState } from 'react';
import { ImageBackground, ImageSourcePropType, View } from 'react-native';
import Colors from '../../constants/Colors';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

import styles from './styles';

type CardProps = {
  imageProps: {
    category: string;
    uri: string;
  };
};

const Card = ({ imageProps }: CardProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const onLoadEnd = () => {
    setIsLoading(false);
  };

  return (
    <View style={styles.card}>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={{ uri: imageProps.uri }}
        onLoadEnd={onLoadEnd}
      />
      {isLoading && (
        <View style={styles.spinner}>
          <LoadingSpinner />
        </View>
      )}
    </View>
  );
};

export default Card;
