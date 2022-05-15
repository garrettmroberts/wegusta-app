import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Toast } from '../../../app/components/Toast/Toast';
import CenterView from '../CenterView';

storiesOf('Toast', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <Toast description="Description" iconLeft="md-person-add"/>
  ))
