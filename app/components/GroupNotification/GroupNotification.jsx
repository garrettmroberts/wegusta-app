import React from 'react';
import { View, Text, Pressable } from 'react-native';
import PropTypes from 'prop-types';

import Avatar from '../Avatar/Avatar';
import styles from './styles';
import buildIcon from '../../utils/buildIcon';
import formatNumber from '../../utils/formatNumber';
import { colors } from '../../config';

const GroupNotification = ({ users, unread, lastUpdated, handlePress }) => {
  const wrapperClass = (unread) => {
    if (unread) {
      return styles.unreadWrapper;
    } else {
      return styles.readWrapper;
    }
  };

  const generateAvatars = (users) => {
    const avatars = [];
    users.slice(0,2).forEach((user, idx) => {
      if (user.image) {
        avatars.push(
          <Avatar size="medium" 
            avatarStyle="image" 
            image={user.image} 
            key={idx} 
            style={idx === 0 ? styles.avatarFirst : styles.avatarSequence} 
          />
        );
      } else {
        avatars.push(
          <Avatar 
            size="medium" 
            avatarStyle="letter" 
            letter={user.letter} 
            key={idx} 
            style={idx === 0 ? styles.avatarFirst : styles.avatarSequence} 
          />
        );
      };
    });

    if (users.length > 2) {
      avatars.push(
        <View style={styles.additionalUsersAvatar} key={'additionalUsers'}>
          <Text style={styles.additionalUsersText}>+{users.length - 2}</Text>
        </View>
      );
    };

    return avatars;
  };

  const avatarWrapperClass = users => {
    if (users.length === 2) {
      return styles.midLengthAvatars;
    } else if (users.length > 2) {
      return styles.longLengthAvatars;
    }
  };

  const generateNames = (users) => {
    let names = '';
    if (users.length === 1) {
      names += users[0].firstName.concat(' ', users[0].lastName);
    } else {
      users.forEach((user, idx) => {
        user.firstName.split('').forEach(char => {
          names.length <= 22 ? names += char : '';
        });

        if (names.length <= 22 && idx !== users.length - 1) {
          names += ', ';
        } else if (names.length >= 22 && idx !== users.length) {
          names += '...';
        }
      });
    }

    return <Text style={styles.names}>{names}</Text>;
  };

  const generateAccessory = (unread, lastUpdated) => {
    if (unread) {
      return (
        <View style={styles.unreadTextWrapper}>
          <Text style={styles.unreadText}>New</Text>
          <View style={styles.unreadAccessory} />
        </View>
      );
    } else {
      const month = lastUpdated.toLocaleString('default', { month: 'long' });
      const date = formatNumber(lastUpdated.getDate());
      return <Text style={styles.lastUpdatedText}>{`${month} ${date}`}</Text>;
    };
  };

  return (
    <Pressable style={[styles.groupNotifications, wrapperClass(unread)]} onPress={handlePress}>
      <View style={[styles.avatarWrapper, avatarWrapperClass(users)]}>
        { generateAvatars(users) }
      </View>
      <View style={styles.textWrapper}>
        { generateNames(users) }
        { generateAccessory(unread, lastUpdated) }
      </View>
      <View style={styles.aside}>
        { buildIcon({name: 'chevron-forward', color: colors.grey, size: 20}) }
      </View>
    </Pressable>
  );
};

GroupNotification.propTypes = {
  users: PropTypes.array.isRequired,
  unread: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.instanceOf(Date).isRequired,
  handlePress: PropTypes.func
};

export default GroupNotification;
