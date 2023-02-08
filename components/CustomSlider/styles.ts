import { StyleSheet } from 'react-native'
import Fonts from '../../constants/Fonts'
import Sizes from '../../constants/Sizes'

const styles = StyleSheet.create({
  slider: {
    width: Sizes.screenWidth - Sizes.viewPadding * 2,
  },
  labelWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Sizes.screenWidth - Sizes.viewPadding * 2,
  },
  title: {
    ...Fonts.h2Reg,
    marginLeft: 3,
  },
  text: {
    ...Fonts.bodyReg,
    marginLeft: 4,
  },
})

export default styles