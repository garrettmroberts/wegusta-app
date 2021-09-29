import React, { useState } from 'react';
import { SafeAreaView, Text, View, FlatList, ScrollView } from 'react-native';
import { PropTypes } from 'prop-types';

import Button from '../../components/Button/Button';
import InviteUserRow from '../../components/InviteUserRow/InviteUserRow';
import SearchInput from '../../components/SearchInput/SearchInput';
import styles from './styles';

import sampleUsers from '../../temp/sampleUsers';

const InviteScreen = () => {
  const [state, changeState] = useState({
    allUsers: sampleUsers,
    searchQuery: '',
    searching: false,
    selectedUsers: [],
    visibleUsers: sampleUsers
  });

  const handleSearch = (value) => {
    const searching = value.length > 0;
    const visibleUsers = [];

    if (searching) {
      state.allUsers.forEach(user => {
        if (user.name.includes(value)) {
          visibleUsers.push(user);
        }
      });
    }

    changeState({
      ...state,
      searchQuery: value,
      searching,
      visibleUsers: searching ? visibleUsers : state.allUsers
    });

    console.log(state);
  };

  const selectUser = () => {
    console.log('user selected');
  };

  // TODO: Build handler for image type avatar styles
  const generateUsersRows = users => {
    const userSelectionElements = [];
    users.forEach((user, idx) => {
      const userElement = <InviteUserRow name={user.name} avatarStyles={{ avatarStyle: user.avatarStyle, letter: user.letter }} handlePress={selectUser} key={'user' + idx} />;
      userSelectionElements.push(userElement);
    });

    return userSelectionElements;
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.centered}>
        <SearchInput placeholder='Search' handleSearch={handleSearch} />
      </View>
      <ScrollView>
        { generateUsersRows(state.visibleUsers) }
        <View style={styles.spacer} />
      </ScrollView>
      <View style={[styles.centered, styles.nextBtn]}>
        <Button type='primary' size='fullWidth' icon="null" iconPlacement='none' text='Continue' />
      </View>
    </SafeAreaView>
  );
};

export default InviteScreen;
