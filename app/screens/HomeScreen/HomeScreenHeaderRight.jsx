import React from 'react';
import { View } from 'react-native';

import Avatar from '../../components/Avatar/Avatar';
import { colors } from '../../config';
import buildIcon from '../../utils/buildIcon';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const HomeScreenHeaderRight = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navHeader} >
      { buildIcon({
        name: 'notifications-outline',
        color: colors.black,
        size: 32,
        onPress: () => {navigation.navigate('ComponentsDemo');}
      })}
      <View style={styles.navIconGap} />
      <Avatar
        size='navSized'
      />
    </View>
  );
};

export default HomeScreenHeaderRight;
