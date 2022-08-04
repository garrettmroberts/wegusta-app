import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import StarRating from '../../../components/StarRating/StarRating';

storiesOf('Star Rating', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('5 star', () => <StarRating rating={5} />)
  .add('2.5 star', () => <StarRating rating={2.5} />)
  .add('0 star', () => <StarRating rating={0} />);
