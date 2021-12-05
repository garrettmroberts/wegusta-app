import React from 'react';
import Slider from '@react-native-community/slider';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { colors, constants } from '../../config/index';
import styles from './styles';

const SliderComponent = ({min, max, units}) => {
  const low = min || 0;
  const high = max || 20;

  return (
    <View>
      <Slider
        minimumValue={low}
        maximumValue={high}
        style={styles.slider}
        minimumTrackTintColor={colors.primary}
        maximumTrackTintColor={colors.white}
        value={5}
      />
      <View style={styles.labelWrapper}>
        <Text style={styles.text}>{low} {units}</Text>
        <Text style={styles.text}>{high} {units}</Text>
      </View>
    </View>
  );
};

SliderComponent.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  units: PropTypes.string
};

export default SliderComponent;
