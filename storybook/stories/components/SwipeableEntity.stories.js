import { storiesOf } from '@storybook/react-native';
import SwipeableEntity from '../../../components/SwipeableEntity/SwipeableEntity';
import Card from '../../../components/Card/Card';

storiesOf('SwipeableEntity', module).add('Default', () => (
  <SwipeableEntity>
    <Card imageProps={{uri: 'https://picsum.photos/200/300'}} />
  </SwipeableEntity>
));
