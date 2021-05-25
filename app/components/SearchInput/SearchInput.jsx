import React from 'react';
import { TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';
import { colors } from '../../config';

const SearchInput = ({ placeholder, disabled }) => {

  const searchbar = () => {
    if (!disabled) {
      return (
        <View style={styles.inputWrapper} >
          <Ionicons name="search" size={19.5} color={colors.greyDark} style={styles.icon} />
          <TextInput 
            placeholder={placeholder}
            placeholderTextColor={colors.greyDark}
            style={styles.input}
            keyboardType='default'
            returnKeyType='go'
          />
        </View>
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
          />
        </View>
      );
    }
  };

  return searchbar();
};

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  disabled: PropTypes.boolean
};

export { SearchInput };
