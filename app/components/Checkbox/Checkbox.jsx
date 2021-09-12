import React, { useState } from 'react';
import { Pressable } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { colors } from '../../config';
import buildIcon from '../../utils/buildIcon';

const Checkbox = ({ currentState, darkMode, handlePress }) => {
  const [state, setState] = useState(currentState);

  const PressableStyles = (state, darkMode) => {
    const style = [styles.box];
    
    if (darkMode) {
      style.push(styles.darkBox);
    } else {
      style.push(styles.lightBox);
    }

    if (state === 'disabled') {
      style.push(styles.disabledBox);
    }

    return style;
  };

  const innerElement = (state, darkMode) => {
    const iconColor = darkMode ? colors.white : colors.primary;

    let icon;
    
    switch (state) {
    case 'unchecked':
      break;
    case 'partial':
      icon = buildIcon({
        name: 'minus',
        color: iconColor,
        size: 20
      });
      break;
    case 'checked':
      icon = buildIcon({
        name: 'checkmark',
        color: iconColor,
        size: 20
      });
      break;
    case 'disabled':
      icon = buildIcon({
        name: 'checkmark',
        color: colors.grey,
        size: 20
      });
      break;
    }

    return icon;
  };

  const vanillaHandlePress = () => {
    if (state === 'unchecked') {
      setState('checked');
    } else if (state === 'checked') {
      setState('unchecked');
    }
  };
  
  return (
    <Pressable style={PressableStyles(state, darkMode)} onPress={handlePress || vanillaHandlePress} >
      { innerElement(state, darkMode) }
    </Pressable>
  );
};

Checkbox.propTypes = {
  currentState: PropTypes.string.isRequired, // unchecked, partial, checked, disabled
  darkMode: PropTypes.bool,
  handlePress: PropTypes.func
};

export default Checkbox;
