import React from 'react';
import { View, Text } from 'react-native';
import { PropTypes } from 'prop-types';
import Slider from '../../components/Slider/Slider';
import styles from './styles';
import Button from '../../components/Button/Button';

const FilterScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.spacer}></View>
      <Slider title={'distance'} units={'miles'} />
      <View style={styles.buttonContainer}>
        <Button type="primary" size="fullWidth" iconPlacement="left" text="Continue" icon="person-add" />
      </View>
    </View>
  );
};

FilterScreen.propTypes = {
};

export default FilterScreen;
