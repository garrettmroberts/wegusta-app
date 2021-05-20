import React from 'react';
import { Pressable, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const DecisionButton = ({ decision, handlePress }) => {
  const icon = decision => {
    if (decision === 'like') {
      return(<Image source={require('../../assets/heart-icon.png')} style={styles.icon} />);
    } else {
      return(<Image source={require('../../assets/x-icon.png')} style={styles.icon} />);
    }
  };
  
  return(
    <Pressable style={ styles.button } onPress={ handlePress } >
      { icon(decision) }
    </Pressable>
  );
};

DecisionButton.propTypes = {
  decision: PropTypes.string.isRequired, // like, dislike
  handlePress: PropTypes.func
};

export { DecisionButton };
