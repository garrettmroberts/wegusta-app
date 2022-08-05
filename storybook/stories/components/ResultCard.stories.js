import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import ResultCard from '../../../components/ResultCard/ResultCard';

storiesOf('Result Card', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <ResultCard
      title="Hop Doddie"
      rating={3.5}
      distance={5}
      dollarSign="$$"
      description="Sample descriptive info..."
    />
  ));
