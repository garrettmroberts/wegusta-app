import { StyleSheet } from 'react-native';
import { colors, constants, fonts } from '../../config';

const styles = StyleSheet.create({
  groupNotifications: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingLeft: 24,
    paddingRight: 36,
    width: constants.screenWidth
  },
  readWrapper: {
    backgroundColor: colors.white
  },
  unreadWrapper: {
    backgroundColor: colors.greyLight
  },
  avatarWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatarFirst: {
    width: 56
  },
  avatarSequence: {
    position: 'relative',
    left: -20
  },
  additionalUsersAvatar: {
    height: 40,
    width: 40,
    borderRadius: 90,
    backgroundColor: colors.greyLight,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    left: -40
  },
  additionalUsersText: {
    ...fonts.bodyBold
  },
  names: {
    ...fonts.bodyBold,
    overflow: 'hidden'
  },
  lastUpdatedText: {
    ...fonts.metaReg,
    color: colors.greyDark
  },
  unreadTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  unreadText: {
    ...fonts.metaBold,
    color: colors.greyDark
  },
  unreadAccessory:{
    height: 8,
    width: 8,
    backgroundColor: colors.error,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 90,
    marginLeft: 8
  },
  midLengthAvatars: {
    width: 92
  },
  longLengthAvatars: {
    width: 112
  },
  textWrapper: {
    marginLeft: 8
  },
  aside: {
    position: 'absolute',
    right: 36
  }
});

export default styles;
