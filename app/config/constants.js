import { Dimensions, Platform } from 'react-native';

let headerHeight = Platform.OS === 'ios' ? 66 : 46;
let footerHeight = 55;

const constants = {
  headerHeight: headerHeight,
  footerHeight: footerHeight,
  viewHeight: Dimensions.get('window').height - headerHeight,
  viewPadding: 24,
  defaultSpacer: 10,
  screenHeight: Dimensions.get('window').height,
  screenWidth: Dimensions.get('window').width,
  baseImageStyle: { flex: 1, width: undefined, height: undefined }
};

export { constants };
