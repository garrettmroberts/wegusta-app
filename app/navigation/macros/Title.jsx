import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { colors } from '../../config';

const Title = ({ headerText }) => {
  return <Text style={styles.header}>{ headerText }</Text>;
};

Title.propTypes = {
  headerText: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 24,
    fontSize: 24,
    fontFamily: 'Avenir',
    fontWeight: '900',
    lineHeight: 32,
    color: colors.black
  }
});

export default Title;
