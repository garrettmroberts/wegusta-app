import React from 'react'
import Slider from '@react-native-community/slider'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'
import Colors from '../../constants/Colors'

import styles from './styles'

type CustomSliderProps = {
    title: string,
    min: number,
    max: number,
    units: string
}

const CustomSlider = ({ title, min, max, units }: CustomSliderProps) => {
  const low = min || 0
  const high = max || 20

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Slider
        minimumValue={low}
        maximumValue={high}
        style={styles.slider}
        minimumTrackTintColor={Colors.primary}
        maximumTrackTintColor={Colors.white}
        value={5}
      />
      <View style={styles.labelWrapper}>
        <Text style={styles.text}>
          {low} {units}
        </Text>
        <Text style={styles.text}>
          {high} {units}
        </Text>
      </View>
    </View>
  )
}

export default CustomSlider;