import React from 'react';
import { View, ScrollView, FlatList, Text } from 'react-native';

import GroupNotification from '../../components/GroupNotification/GroupNotification';
import styles from './styles';

const NotificationScreen = () => {
  return (
    <ScrollView style={styles.screenWrapper}>
      <View style={styles.section}>
        <Text style={styles.header}>New</Text>
        <GroupNotification 
          users={[
            {image: { uri: 'https://picsum.photos/200' }, firstName: 'Sophia', lastName: 'Coleman' },
            {image: { uri: 'https://picsum.photos/200' }, firstName: 'Jax', lastName: 'Coleman' },
            {letter: 'A', firstName: 'ReallyLongName', lastName: 'Alvares'},
            {letter: 'J', firstName: 'Julio', lastName: 'Alvares'}
          ]}
          unread={true}
          lastUpdated={new Date()}
        />
        <GroupNotification 
          users={[
            {image: { uri: 'https://picsum.photos/200' }, firstName: 'Aaron', lastName: 'Coleman' }
          ]}
          unread={true}
          lastUpdated={new Date()}
        />
        <GroupNotification 
          users={[
            {image: { uri: 'https://picsum.photos/200' }, firstName: 'Aaron', lastName: 'Coleman' },
            {letter: 'A', firstName: 'Julio', lastName: 'Alvares'}
          ]}
          unread={true}
          lastUpdated={new Date()}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Past</Text>
        <GroupNotification 
          users={[
            {image: { uri: 'https://picsum.photos/200' }, firstName: 'Aaron', lastName: 'Coleman' },
            {image: { uri: 'https://picsum.photos/200' }, firstName: 'Rodrigo', lastName: 'Coleman' },
            {image: { uri: 'https://picsum.photos/200' }, firstName: 'Guadalupe', lastName: 'Coleman' },
            {letter: 'A', firstName: 'Julio', lastName: 'Alvares'}
          ]}
          unread={false}
          lastUpdated={new Date()}
        />
        <GroupNotification 
          users={[
            {image: { uri: 'https://picsum.photos/200' }, firstName: 'Aaron', lastName: 'Coleman' },
            {letter: 'A', firstName: 'Julio', lastName: 'Alvares'}
          ]}
          unread={false}
          lastUpdated={new Date()}
        />
        <GroupNotification 
          users={[
            {image: { uri: 'https://picsum.photos/200' }, firstName: 'Aaron', lastName: 'Coleman' },
          ]}
          unread={false}
          lastUpdated={new Date()}
        />
      </View>
    </ScrollView>
  );
};

export default NotificationScreen;
