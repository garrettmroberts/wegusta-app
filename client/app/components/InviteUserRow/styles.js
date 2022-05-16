import { StyleSheet } from 'react-native'
import { constants, fonts } from '../../config'

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: constants.screenWidth,
        paddingHorizontal: constants.viewPadding,
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 16,
        overflow: 'hidden',
        ...fonts.h2Reg,
    },
    avatar: {
        marginVertical: 16,
    },
})

export default styles
