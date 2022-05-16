import React from 'react'
import Slider from '@react-native-community/slider'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'

import { colors, constants, fonts } from '../../config/index'
import capitalize from '../../utils/capitalize'
import styles from './styles'

const SliderComponent = ({ title, min, max, units }) => {
    const low = min || 0
    const high = max || 20

    return (
        <View>
            <Text style={styles.title}>{capitalize(title)}</Text>
            <Slider
                minimumValue={low}
                maximumValue={high}
                style={styles.slider}
                minimumTrackTintColor={colors.primary}
                maximumTrackTintColor={colors.white}
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

SliderComponent.propTypes = {
    title: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    units: PropTypes.string,
}

export default SliderComponent
