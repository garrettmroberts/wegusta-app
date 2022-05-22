import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import Toast from './Toast'
import CenterView from '../../../storybook/stories/CenterView'
import { Text } from 'react-native'

storiesOf('Toast', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <Toast description="Description" iconLeft="md-person-add" />
  ))
