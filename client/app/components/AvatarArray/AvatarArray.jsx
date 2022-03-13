import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';

import Avatar from '../Avatar/Avatar';
import styles from './styles';

const AvatarArray = ({ avatars }) => {
  const generateAvatars = (avatars) => {
    const res = [];
    const isLong = avatars.length > 7;
    avatars.forEach((avatar, idx) => {
      if (avatar.image) {
        res.push(
          <Avatar size="small" 
            avatarStyle="image" 
            image={avatar.image} 
            key={idx}
            style={!isLong && idx !== avatars.length - 1 ? styles.regMargin : styles.smallMargin}
          />
        );
      } else {
        res.push(
          <Avatar 
            size="small" 
            avatarStyle="letter" 
            letter={avatar.letter}
            key={idx} 
            style={!isLong && idx < avatars.length - 1 ? styles.regMargin : styles.smallMargin}
          />
        );
      };
    });

    return res;
  };

  const generateContent = avatars => {
    if (avatars.length < 7) {
      return(
        <View>
          <View style={styles.wrapper, styles.centered}>
            {generateAvatars(avatars)}
          </View>
        </View>
      );
    } else {
      return(
        <View>
          <ScrollView horizontal style={styles.wrapper}>
            {generateAvatars(avatars)}
          </ScrollView>
        </View>
      );
    }
  };

  return (
    generateContent(avatars)
  );
};

AvatarArray.propTypes = {
  avatars: PropTypes.array.isRequired
};

export default AvatarArray;
