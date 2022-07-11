import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import DecisionButton from '../../components/DecisionButton/DecisionButton';
import CenterView from './CenterView';

storiesOf('Decision Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Like', () => (
      <DecisionButton decision='like'  onPress={action('pressed like')}/>
  ))
  .add('Dislike', () => (
    <DecisionButton decision='dislike' onPress={action('pressed dislike')}/>
  ));

// import { text } from '@storybook/addon-knobs';

// storiesOf('Button', module)
//   .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
//   .add('with text', () => (
//     <Button onPress={action('clicked-text')}>
//       <Text>{text('Button text', 'Hello Button')}</Text>
//     </Button>
//   ))
//   .add('with some emoji', () => (
//     <Button onPress={action('clicked-emoji')}>
//       <Text>😀 😎 👍 💯</Text>
//     </Button>
//   ));
