import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import Avatar from '../Avatar/Avatar';
import styles from './styles';
import buildIcon from '../../utils/buildIcon';
import { colors } from '../../config';

const GroupNotification = ({ users, unread, lastUpdated }) => {
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
    const names = [];
    if (users.length === 1) {
      names.push(users[0].firstName.concat(' ', users[0].lastName));
    } else {
      users.forEach(user => {
        names.push(user.firstName);
      });
    }

    return <Text style={styles.names}>{names.join(', ')}</Text>;
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
      return <Text style={styles.lastUpdatedText}>{lastUpdated.toLocaleString('default', { month: 'long', day: 'numeric' }) }</Text>;
    };
  };

  return (
    <View style={[styles.groupNotifications, wrapperClass(unread)]}>
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
    </View>
  );
};

GroupNotification.propTypes = {
  users: PropTypes.array.isRequired,
  unread: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.instanceOf(Date)
};

export default GroupNotification;
