import {
  Animated,
  ImageBackground,
  ImageSourcePropType,
  View
} from 'react-native';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../utils/Context/Context';
import FoodImages from '../../utils/FoodImages';

import styles from './styles';

type CardProps = {
  imageProps: {
    category: string;
    imageName: any;
  };
};

const Card = ({ imageProps }: CardProps) => {
  const { context, dispatch } = useContext(AppContext);
  const imageFadeIn = new Animated.Value(0);

  const handleImageLoad = () => {
    Animated.timing(imageFadeIn, {
      toValue: 1,
      useNativeDriver: true
    }).start();
  };

  return (
    <View style={styles.cardContainer}>
      <Animated.View style={[styles.card, { opacity: imageFadeIn }]}>
        <ImageBackground
          resizeMode="cover"
          style={styles.image}
          source={FoodImages[imageProps.imageName]}
          onLoad={() => handleImageLoad()}
          onLoadEnd={() => {
            dispatch({type: 'incrementLoadedImageCount'});
          }}
        />
      </Animated.View>
    </View>
  );
};

export default Card;
