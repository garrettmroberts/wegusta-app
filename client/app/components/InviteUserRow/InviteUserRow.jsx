import React from 'react'
import { View, Text } from 'react-native'

import Avatar from '../Avatar/Avatar'
import Checkbox from '../Checkbox/Checkbox'
import PropTypes from 'prop-types'

import styles from './styles'

const InviteUserRow = ({ name, avatarStyles, isSelected, handlePress }) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.flexRow}>
                {Avatar({
                    size: 'medium',
                    style: styles.avatar,
                    ...avatarStyles,
                })}
                <Text style={styles.text}>{name}</Text>
            </View>
            {Checkbox({
                currentState: isSelected ? 'checked' : 'unchecked',
                handlePress,
            })}
        </View>
    )
}

InviteUserRow.propTypes = {
    name: PropTypes.string.isRequired,
    avatarStyles: PropTypes.shape({
        avatarStyle: PropTypes.oneOf(['image', 'letter']),
        letter: PropTypes.string, // Only required if avatarStyle === 'letter'
        image: PropTypes.object, // Only required if avatarStyle === 'image'.  Check react-native Image docs for example
    }),
    isSelected: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    handlePress: PropTypes.func,
}

export default InviteUserRow
