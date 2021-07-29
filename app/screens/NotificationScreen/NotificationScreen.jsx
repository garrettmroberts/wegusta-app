import React from 'react';
import { View, Text } from 'react-native';

import GroupNotification from '../../components/GroupNotification/GroupNotification';
import styles from './styles';

const NotificationScreen = () => {
  return (
    <View>
      <GroupNotification 
        users={[
          {letter: 'J', name: 'Aaron'},
          {letter: 'A', name: 'Julio'}
        ]}
        unread={true}
        lastUpdated={new Date()}
      />
      <GroupNotification 
        users={[
          {letter: 'A', name: 'Julio'}
        ]}
        unread={false}
        lastUpdated={new Date()}
      />
      <GroupNotification 
        users={[
          {letter: 'A', name: 'Julio'},
          {letter: 'B', name: 'Rainn'},
          {letter: 'C', name: 'Tywin'}

        ]}
        unread={false}
        lastUpdated={new Date()}
      />
      
    </View>
  );
};

export default NotificationScreen;
