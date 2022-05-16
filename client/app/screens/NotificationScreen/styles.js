import { StyleSheet } from 'react-native'
import { fonts, colors } from '../../config'

const styles = StyleSheet.create({
    screenWrapper: {
        backgroundColor: colors.white,
    },
    header: {
        ...fonts.bodyBold,
        color: colors.greyDark,
        marginLeft: 24,
    },
    section: {
        marginBottom: 16,
    },
})

export default styles
