import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import buildIcon from '../../utils/buildIcon';
import { constants, colors, fonts } from '../../config';

const InviteLeft = () => {
  const navigation = useNavigation();
  
  const handlePress = () => {
    navigation.navigate('Home');
  };

  return (
    <Pressable style={styles.wrapper} onPress={handlePress}>
      { buildIcon({
        name: 'chevron-back',
        size: 28,
        color: colors.primary
      }) }
      <Text style={styles.text}>Invite</Text>
    </Pressable>
  );
};

const InviteRight = () => {
  // TODO: Link to next page in workflow process
  const handlePress = () => {
    console.log('This function will be implemented later.');
  };

  return (
    <Pressable onPress={handlePress}>
      <Text style={styles.rightText}>Skip</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: constants.viewPadding
  },
  text: {
    marginLeft: 10,
    ...fonts.h2Bold
  },
  rightText: {
    marginRight: constants.viewPadding,
    ...fonts.bodyBold
  }
});

export { InviteLeft, InviteRight };
