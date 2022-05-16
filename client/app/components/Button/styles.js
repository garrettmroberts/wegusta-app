import { StyleSheet } from 'react-native'
import { colors, constants } from '../../config'

const styles = StyleSheet.create({
    centered: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'stretch',
    },
    contentWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'nowrap',
        flexDirection: 'row',
    },
    buttonSmall: {
        borderRadius: 8,
    },
    buttonReg: {
        borderRadius: 12,
    },
    primary: {
        backgroundColor: colors.primary,
    },
    secondary: {
        backgroundColor: colors.greyLight,
    },
    tertiary: {
        backgroundColor: colors.white,
    },
    disabled: {
        backgroundColor: colors.greyLight,
    },
    destructive: {
        backgroundColor: colors.error,
    },
    fullWidth: {
        height: 56,
        width: constants.screenWidth - 32,
        paddingHorizontal: 24,
    },
    large: {
        height: 48,
        paddingHorizontal: 32,
    },
    medium: {
        height: 40,
        paddingHorizontal: 32,
    },
    small: {
        height: 32,
        paddingHorizontal: 32,
    },
    text: {
        marginHorizontal: 10,
        alignSelf: 'center',
    },
    darkText: {
        color: colors.primary,
    },
    grayText: {
        color: colors.grey,
    },
    lightText: {
        color: colors.white,
    },
})

export default styles
