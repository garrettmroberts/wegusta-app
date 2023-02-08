import {
  Animated,
  Easing,
  ImageBackground,
  View
} from 'react-native'
import { useContext, useEffect, useRef } from 'react'
import { AppContext } from '../../utils/Context/Context'
import FoodImages from '../../utils/FoodImages'

import styles from './styles'

type CardProps = {
  imageProps: {
    category: string;
    imageName: string;
  };
  isSmall: boolean;
};

const Card = ({ imageProps, isSmall }: CardProps) => {
  const { dispatch } = useContext(AppContext)
  const scaleAnim = useRef(new Animated.Value(0.9)).current
  const translateYAnim = useRef(new Animated.Value(0)).current

  const scaleUp = () => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 600,
      easing: Easing.bounce,
      useNativeDriver: true
    }).start()
  }

  const translateYUp = () => {
    Animated.timing(translateYAnim, {
      toValue: -25,
      duration: 50,
      easing: Easing.ease,
      useNativeDriver: true
    }).start()
  }

  useEffect(() => {
    if (!isSmall) {
      scaleUp()
      translateYUp()
    }

  }, [isSmall])


  return (
    <Animated.View style={[styles.cardContainer, 
      {
        transform: [{scale: scaleAnim}, {translateY: translateYAnim}, {perspective: 1000}],
      }
    ]}>
      <View style={styles.card}>
        <ImageBackground
          resizeMode="cover"
          style={styles.image}
          source={FoodImages[imageProps.imageName]}
          // onLoad={() => handleImageLoad()}
          onLoadEnd={() => {
            dispatch({type: 'incrementLoadedImageCount'})
          }}
        />
      </View>
    </Animated.View>
  )
}

export default Card
