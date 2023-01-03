import React, { useContext } from 'react'
import Slider from '@react-native-community/slider'
import { Text, View } from 'react-native'
import Colors from '../../constants/Colors'

import styles from './styles'
import { AppContext } from '../../utils/Context/Context'

type CustomSliderProps = {
    title: string,
    min: number,
    max: number,
    units: string,
    onChange: (value: number) => void,
}

const CustomSlider = ({ title, min, max, units, onChange }: CustomSliderProps) => {
  const { context } = useContext(AppContext)

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Slider
        minimumValue={min}
        maximumValue={max}
        style={styles.slider}
        minimumTrackTintColor={Colors.primary}
        maximumTrackTintColor={Colors.white}
        onValueChange={(value) => onChange(value)}
        value={context.filterOptions.filterDistance}
        step={1}
      />
      <View style={styles.labelWrapper}>
        <Text style={styles.text}>
          {min} {units}
        </Text>
        <Text style={styles.text}>
          {max} {units}
        </Text>
      </View>
    </View>
  )
}

export default CustomSlider