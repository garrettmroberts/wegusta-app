import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button/Button';
import InviteUserRow from '../../components/InviteUserRow/InviteUserRow';
import SearchInput from '../../components/SearchInput/SearchInput';
import { useStoreContext } from '../../utils/Context';
import { colors } from '../../config';
import styles from './styles';

import sampleUsers from '../../temp/sampleUsers';

const InviteScreen = () => {
  const [state, changeState] = useState({
    allUsers: sampleUsers,
    searchQuery: '',
    searching: false,
    selectedUserIds: [],
    visibleUsers: sampleUsers
  });

  const [context, dispatch] = useStoreContext();
  const navigation = useNavigation();

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
  };

  const handleClear = () => {
    handleSearch('');
  };

  const selectUser = (id) => {
    state.allUsers.forEach(user => {
      if (user.id === id) {
        if (state.selectedUserIds.includes(id)) {
          const arr = state.selectedUserIds;
          const idx = arr.indexOf(id);
          if (idx !== -1) {
            arr.splice(idx, 1);
          }
          changeState({
            ...state,
            selectedUserIds: arr
          });
        } else {
          const arr = state.selectedUserIds;
          arr.push(id);
          changeState({
            ...state,
            selectedUserIds: arr
          });
        }
      }
    });
  };

  const handleSelection = (id) => {
    return state.selectedUserIds.includes(id);
  };

  // TODO: Build handler for image type avatar styles
  const generateUsersRows = users => {
    const userSelectionElements = [];
    users.forEach((user) => {
      const userElement = <InviteUserRow
        name={user.name} 
        avatarStyles={{ avatarStyle: user.avatarStyle, letter: user.letter }} 
        handlePress={() => selectUser(user.id)} 
        key={'user-' + user.id}
        isSelected={handleSelection(user.id)}
      />;
      userSelectionElements.push(userElement);
    });

    return userSelectionElements;
  };

  const handleSubmit = () => {
    const resArr = [];
    state.selectedUserIds.forEach(idx => {
      state.allUsers.forEach(user => {
        if (user.id === idx) {
          resArr.push(user);
        }
      });
    });

    dispatch({
      type: 'updatePendingWorkflowSelectedUsers',
      payload: resArr
    });
    
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={[styles.centered, styles.bottomMargin]}>
        <SearchInput placeholder='Search' handleSearch={handleSearch} handleClear={handleClear} />
      </View>
      <ScrollView>
        { generateUsersRows(state.visibleUsers) }
        <View style={styles.spacer} />
      </ScrollView>
      <View style={[styles.centered, styles.buttons]}>
        <Button type='tertiary' size='medium' icon='null' iconPlacement='none' text='Skip' style={styles.leftButton} handlePress={handleSubmit} />
        <Button type='primary' size='medium' icon='md-person-add' iconPlacement='left' text='Send Invites' style={styles.rightButton} handlePress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
};

export default InviteScreen;
