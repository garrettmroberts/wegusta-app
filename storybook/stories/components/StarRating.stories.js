import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, object } from '@storybook/addon-knobs';
import { number } from '@storybook/addon-knobs';
import CenterView from '../CenterView';
import StarRating from '../../../components/StarRating/StarRating';

const label = 'Rating';
const defaultValue = 2.5;
const options = {
  range: true,
  min: 5,
  max: 0,
  step: 0.5
};
const groupId = 'GROUP-ID1';

const value = number(label, defaultValue, options, groupId);

storiesOf('Star Rating', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add('default', () => <StarRating rating={number('Rating', value)} />);
