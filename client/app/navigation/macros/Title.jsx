import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { fonts } from '../../config'
import PropTypes from 'prop-types'

const Title = ({ headerText }) => {
    return <Text style={styles.header}>{headerText}</Text>
}

Title.propTypes = {
    headerText: PropTypes.string.isRequired,
    fontSize: PropTypes.number,
}

const styles = StyleSheet.create({
    header: {
        marginHorizontal: 24,
        ...fonts.h2Bold,
        ...fonts.textDark,
    },
})

export default Title
