import { storiesOf } from '@storybook/react-native';
import CardStack from '../../../components/CardStack/CardStack';
import Card from '../../../components/Card/Card';

const defaultProps = [
  <Card imageProps={{ uri: 'https://picsum.photos/200/300' }} />,
  <Card imageProps={{ uri: 'https://picsum.photos/200/300' }} />,
  <Card imageProps={{ uri: 'https://picsum.photos/200/300' }} />
];

storiesOf('CardStack', module).add('Default', () => (
  <CardStack cards={defaultProps} />
));
