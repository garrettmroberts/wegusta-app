import { ImageBackground, ImageSourcePropType, View } from 'react-native';

import styles from './styles';

type Props = {
  imageProps: ImageSourcePropType
}

const Card = ({ imageProps }: Props) => {
  return (
    <View style={styles.card}>
      <ImageBackground 
        resizeMode="cover"
        style={styles.image}
        source={imageProps}
      />
    </View>
  )
};

export default Card;
