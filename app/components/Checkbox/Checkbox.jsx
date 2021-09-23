import React, { useState } from 'react';
import { Pressable } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { colors } from '../../config';
import buildIcon from '../../utils/buildIcon';

const Checkbox = ({ currentState, handlePress }) => {
  const [state, setState] = useState(currentState);

  const PressableStyles = (state) => {
    const style = [styles.box];
    
    if (state === 'partial' || state === 'checked') {
      style.push(styles.darkBox);
    } else {
      style.push(styles.lightBox);
    }

    if (state === 'disabled') {
      style.push(styles.disabledBox);
    }

    return style;
  };

  const innerElement = (state) => {
    const iconColor = state === 'partial' || state === 'checked' ? colors.white : colors.primary;

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
    <Pressable style={PressableStyles(state)} onPress={handlePress || vanillaHandlePress} >
      { innerElement(state) }
    </Pressable>
  );
};

Checkbox.propTypes = {
  currentState: PropTypes.string.isRequired, // unchecked, partial, checked, disabled
  handlePress: PropTypes.func
};

export default Checkbox;
