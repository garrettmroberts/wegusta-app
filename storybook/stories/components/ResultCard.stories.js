import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { object } from '@storybook/addon-knobs';
import CenterView from '../CenterView';
import ResultCard from '../../../components/ResultCard/ResultCard';

const label = 'Props';
const defaultValue = {
  title: 'Hop Doddie',
  rating: 3.5,
  distance: 5,
  dollarSign: '$$',
  description: 'Sample desriptive info...'
};
const groupId = 'GROUP-ID1';

const value = object(label, defaultValue, groupId);

storiesOf('Result Card', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <ResultCard
      {...value}
    />
  ));
