import { storiesOf } from '@storybook/react-native';
import { select } from '@storybook/addon-knobs';
import Card from '../../../components/Card/Card';
import CenterView from '../CenterView';

storiesOf('Card', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Local Image', () => (
    <Card imageProps={{ uri: 'https://picsum.photos/200/300' }} />
  ))
  .add('Remote image', () => (
    <Card imageProps={require('../../../assets/sample-image.jpeg')} />
  ));
