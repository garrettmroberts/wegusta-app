import { storiesOf } from '@storybook/react-native';
import SwipeableEntity from '../../../components/SwipeableEntity/SwipeableEntity';
import Card from '../../../components/Card/Card'
import { Text } from 'react-native';

storiesOf('SwipeableEntity', module)
  .add('Default', () => (
    <SwipeableEntity>
      <Card />
    </SwipeableEntity>
  ))
