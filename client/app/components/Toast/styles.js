import { StyleSheet } from 'react-native'
import { colors, constants } from '../../config'

const styles = StyleSheet.create({
    wrapper: {
        width: constants.screenWidth - 48,
        borderRadius: 12,
        flexDirection: 'row',
        backgroundColor: colors.black,
        opacity: 0.7,
        paddingVertical: 16,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },
    flexRow: {
        flexDirection: 'row',
    },
    text: {
        marginHorizontal: 9,
    },
})

export default styles
