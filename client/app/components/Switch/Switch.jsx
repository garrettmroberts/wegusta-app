import React, { useState } from 'react'
import { Switch as ReactSwitch } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'
import { colors } from '../../config'

const Switch = ({ disabled, selected }) => {
    const [isEnabled, setIsEnabled] = useState(selected)

    const toggleSwitch = () => {
        setIsEnabled(state => !state)
    }

    const switchColors = disabled
        ? { false: colors.greyLight, true: colors.greyLight }
        : { false: colors.grey, true: colors.success }
    return (
        <ReactSwitch
            trackColor={switchColors}
            thumbColor={disabled ? colors.grey : ''}
            ios_backgroundColor={disabled ? colors.greyLight : colors.grey}
            onValueChange={toggleSwitch}
            value={isEnabled}
            disabled={disabled}
        />
    )
}

Switch.propTypes = {
    disabled: PropTypes.bool,
    selected: PropTypes.bool,
}

export default Switch
