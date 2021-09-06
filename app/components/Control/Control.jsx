import React, { useState } from 'react';
import { Switch, Pressable } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { colors } from '../../config';

const Control = ({ type, disabled, selected }) => {
  const [isEnabled, setIsEnabled] = useState(selected);

  const toggleSwitch = () => {
    setIsEnabled(state => !state);
  };

  if (type === 'toggle') {
    const switchColors = disabled ? {false: colors.greyLight, true: colors.greyLight} : {false: colors.grey, true: colors.success};
    return (
      <Switch
        trackColor={switchColors}
        thumbColor={disabled ? colors.grey : ''}
        ios_backgroundColor={disabled ? colors.greyLight : colors.grey}
        onValueChange={toggleSwitch}
        value={isEnabled}
        disabled={disabled}
      />
    );
  } else {
    return <Pressable />;
  }
};

Control.propTypes = {
  type: PropTypes.string.isRequired, // toggle, checkbox
  disabled: PropTypes.bool,
  selected: PropTypes.bool
};

export default Control;
