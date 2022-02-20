import React from 'react';
import { Text, Pressable, View } from 'react-native';
import PropTypes from 'prop-types';

import buildIcon from '../../utils/buildIcon';
import { colors, fonts } from '../../config';
import styles from './styles';

const Toast = ({ description, iconLeft, onPress }) => {
  return (
    <Pressable style={styles.wrapper} onPress={onPress}>
      <View style={styles.flexRow}>
        { buildIcon({ name: iconLeft, size: 22.5, color: colors.white }) }
        <Text style={[fonts.bodyReg, fonts.textLight, styles.text]}>{ description }</Text>
      </View>
      { buildIcon({ name: 'close', size: 22.5, color: colors.white }) }
    </Pressable>
  );
};

Toast.propTypes = {
  description: PropTypes.string.isRequired,
  iconLeft: PropTypes.string.isRequired, // String name of icon
  onPress: PropTypes.func
};

export { Toast };