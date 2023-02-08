import { Dimensions, Platform } from 'react-native'

const headerHeight = Platform.OS === 'ios' ? 66 : 46
const footerHeight = 55

export default {
  headerHeight: headerHeight,
  footerHeight: footerHeight,
  viewHeight: Dimensions.get('window').height - headerHeight,
  viewPadding: 24,
  viewPaddingSmall: 16,
  defaultSpacer: 10,
  screenHeight: Dimensions.get('window').height,
  screenWidth: Dimensions.get('window').width,
  baseImageStyle: { flex: 1, width: undefined, height: undefined },
  cardHeight: 500
}
