import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

import Avatar from '../../components/Avatar/Avatar';
import { colors } from '../../config';
import buildIcon from '../../utils/buildIcon';
import { useStoreContext } from '../../utils/Context';

import { useNavigation } from '@react-navigation/native';

const RightAlignedIcons = () => {
  const navigation = useNavigation();
  const [state, dispatch] = useStoreContext();

  const renderNotification = () => {
    if (state.unreadNotifications) {
      return <View style={styles.notification} />;
    }
  };

  return (
    <View style={styles.rightIconsWrapper} >
      { buildIcon({
        name: 'notifications-outline',
        color: colors.black,
        size: 32,
        onPress: () => {
          navigation.navigate('ComponentsDemo');
          dispatch({type: 'clearNotifications'});
        }
      })}
      { renderNotification() }
      <View style={styles.navIconGap} />
      <Avatar
        size='navSized'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rightIconsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24
  },
  navIconGap: {
    width: 24
  },
  notification: {
    height: 10,
    width: 10,
    backgroundColor: colors.error,
    borderRadius: 90,
    position: 'absolute',
    top: 4,
    left: 18,
    borderColor: colors.white,
    borderWidth: 1
  }
});

export default RightAlignedIcons;
