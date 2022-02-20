import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const LargeCard = ({image, title, description, rating, distance, timeOpen, cost}) => {

  const generateStarValue = (rating) => {
    const res = [];

    for (let i = 1; i <= 5; i++) {
      if (i < rating) {
        res.push(
          <Image 
            source={require('../../assets/star.png')} 
            key={`star-${i}`}
            style={styles.star}
          />
        );
      } else if (i - rating === 0.5) {
        res.push(
          <Image 
            source={require('../../assets/star-half.png')} 
            key={`star-${i}`}
            style={styles.star}
          />
        );
      } else {
        res.push(
          <Image 
            source={require('../../assets/star.png')} 
            key={`star-${i}`}
            style={[styles.star, styles.starInactive]}
          />
        );
      }
    }
    
    return (
      <View style={styles.starWrapper}>
        {res}
      </View>
    );
  };

  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.image}
        source={require('../../assets/burger.png')}
      />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        {generateStarValue(rating)}
        <Text style={styles.subheaders}>{distance} • {timeOpen} • {cost}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

LargeCard.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  distance: PropTypes.string.isRequired,
  timeOpen: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired
};

export default LargeCard;
