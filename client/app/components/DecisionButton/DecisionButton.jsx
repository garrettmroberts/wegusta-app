import React from 'react'
import { Pressable, View } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'
import { colors } from '../../config'
import buildIcon from '../../utils/buildIcon'

const DecisionButton = ({ decision, handlePress }) => {
    const icon = decision => {
        if (decision === 'like') {
            return buildIcon({ name: 'heart', size: 50, color: colors.error })
        } else {
            return buildIcon({ name: 'close', size: 60, color: colors.primary })
        }
    }

    return (
        <Pressable
            style={({ pressed }) => [
                styles.button,
                { opacity: pressed ? 0.8 : 1 },
            ]}
            onPress={handlePress}
        >
            <View style={styles.icon}>{icon(decision)}</View>
        </Pressable>
    )
}

DecisionButton.propTypes = {
    decision: PropTypes.string.isRequired, // like, dislike
    handlePress: PropTypes.func,
}

export { DecisionButton }
