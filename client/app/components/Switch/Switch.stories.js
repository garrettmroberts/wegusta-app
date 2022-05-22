import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import Switch from './Switch'
import CenterView from '../../../storybook/stories/CenterView'
import { Text } from 'react-native'

storiesOf('Switch', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('selected', () => (
    <Switch selected={true} />
  ))
  .add('disabled', () => (
    <Switch disabled={true} />
  ))
  