import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { colors } from '../../config';

const Title = ({ children }) => {;
  return <Text style={styles.header}>{ children }</Text>;
};

Title.propTypes = {
  children: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 24,
    fontSize: 18,
    fontFamily: 'Avenir',
    fontWeight: '900',
    lineHeight: 32,
    color: colors.primary
  }
});

export default Title;
