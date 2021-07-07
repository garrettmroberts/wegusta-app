import React, { useRef, useState } from 'react';
import { TextInput, View, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';
import { colors } from '../../config';

const SearchInput = ({ placeholder, disabled }) => {

  const [state, setState] = useState({
    inputText: '',
    clearIconDisplayStyle: 'none'
  });

  const handleFocus = () => {
    setState({
      ...state,
      clearIconDisplayStyle: 'flex'
    });
  };

  const handleChangeText = value => {
    setState({
      ...state,
      inputText: value
    });
  };

  const handleClear = () => {
    setState({
      clearIconDisplayStyle: 'none',
      inputText: ''
    });
  };

  const searchbar = () => {
    if (!disabled) {
      return (
        <Pressable>
          <View style={styles.inputWrapper} >
            <Ionicons name="search" size={19.5} color={colors.greyDark} style={styles.icon} />
            <TextInput 
              placeholder={placeholder}
              placeholderTextColor={colors.greyDark}
              value={state.inputText}
              onChangeText={handleChangeText}
              style={styles.input}
              keyboardType='default'
              returnKeyType='go'
              onFocus={handleFocus}
            />
            <Pressable onPress={handleClear}>
              <Ionicons name="close" size={20} color={colors.greyDark} style={{ display: state.clearIconDisplayStyle }} />
            </Pressable>
          </View>
        </Pressable>
      );
    } else {
      return (
        <View style={styles.inputWrapper} > 
          <Ionicons name="search" size={19.5} color={colors.grey} style={styles.icon} />
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={colors.grey}
            style={styles.input}
            keyboardType='default'
            returnKeyType='go'
            editable={false}
          />
        </View>
      );
    }
  };

  return searchbar();
};

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

export { SearchInput };
