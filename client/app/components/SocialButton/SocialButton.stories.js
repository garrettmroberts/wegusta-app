import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import SocialButton from './SocialButton'
import CenterView from '../../../storybook/stories/CenterView'
import { Text } from 'react-native'

storiesOf('Social Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('google', () => <SocialButton icon="google" />)
  .add('facebook', () => <SocialButton icon="facebook" />)
  .add('email', () => <SocialButton icon="email" />)
  .add('apple', () => <SocialButton icon="apple" />)
