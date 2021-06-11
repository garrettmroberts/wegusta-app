import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../config';

const styles = StyleSheet.create({
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  contentWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row'
  },
  buttonSmall: {
    borderRadius: 12
  },
  buttonReg: {
    borderRadius: 8
  },
  primary: {
    backgroundColor: colors.primary
  },
  error: {
    backgroundColor: colors.greyLight
  },
  tertiary: {
    backgroundColor: colors.white
  },
  disabled: {
    backgroundColor: colors.greyLight
  },
  destructive: {
    backgroundColor: colors.error
  },
  fullWidth: {
    height: 48,
    width: '100%',
    paddingHorizontal: 24
  },
  large: {
    height: 48,
    paddingHorizontal: 32
  },
  medium: {
    height: 40,
    paddingHorizontal: 32
  },
  small: {
    height: 32,
    paddingHorizontal: 32
  },
  text: {
    marginHorizontal: 10,
    fontWeight: fonts.button.fontWeight,
    fontSize: fonts.button.fontSize,
    lineHeight: fonts.button.lineHeight,
    alignSelf: 'center'
  },
  darkText: {
    color: colors.black
  },
  grayText: {
    color: colors.grey
  }
});

export default styles;
