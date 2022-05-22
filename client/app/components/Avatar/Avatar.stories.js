import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import Avatar from './Avatar'
import CenterView from '../../../storybook/stories/CenterView'
import { Text } from 'react-native'

storiesOf('Avatar', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('xsmall', () => <Avatar size="xsmall" />)
  .add('small', () => <Avatar size="small" />)
  .add('medium', () => <Avatar size="medium" />)
  .add('large', () => <Avatar size="large" />)
  .add('small w/ checkmark', () => (
    <Avatar size="small" accessory="checkmark" />
  ))
  .add('medium w/ checkmark', () => (
    <Avatar size="medium" accessory="checkmark" />
  ))
  .add('large w/ checkmark', () => (
    <Avatar size="large" accessory="checkmark" />
  ))
  .add('xsmall w/ letter style', () => (
    <Avatar size="xsmall" avatarStyle="letter" letter="A" />
  ))
  .add('small w/ letter style', () => (
    <Avatar size="small" avatarStyle="letter" letter="A" />
  ))
  .add('medium w/ letter style', () => (
    <Avatar size="medium" avatarStyle="letter" letter="A" />
  ))
  .add('large w/ letter style', () => (
    <Avatar size="large" avatarStyle="letter" letter="A" />
  ))
  .add('small w/ letter style & checkmark', () => (
    <Avatar
      size="small"
      avatarStyle="letter"
      letter="A"
      accessory="checkmark"
    />
  ))
  .add('medium w/ letter style & checkmark', () => (
    <Avatar
      size="medium"
      avatarStyle="letter"
      letter="A"
      accessory="checkmark"
    />
  ))
  .add('large w/ letter style & checkmark', () => (
    <Avatar
      size="large"
      avatarStyle="letter"
      letter="A"
      accessory="checkmark"
    />
  ))
  .add('xsmall w/ image style', () => (
    <Avatar
      size="xsmall"
      avatarStyle="image"
      image={{ uri: 'https://picsum.photos/200' }}
    />
  ))
  .add('small w/ image style', () => (
    <Avatar
      size="small"
      avatarStyle="image"
      image={{ uri: 'https://picsum.photos/200' }}
    />
  ))
  .add('medium w/ image style', () => (
    <Avatar
      size="medium"
      avatarStyle="image"
      image={{ uri: 'https://picsum.photos/200' }}
    />
  ))
  .add('large w/ image style', () => (
    <Avatar
      size="large"
      avatarStyle="image"
      image={{ uri: 'https://picsum.photos/200' }}
    />
  ))
  .add('small w/ image style & checkmark', () => (
    <Avatar
      size="small"
      avatarStyle="image"
      image={{ uri: 'https://picsum.photos/200' }}
      accessory="checkmark"
    />
  ))
  .add('medium w/ image style & checkmark', () => (
    <Avatar
      size="medium"
      avatarStyle="image"
      image={{ uri: 'https://picsum.photos/200' }}
      accessory="checkmark"
    />
  ))
  .add('large w/ image style & checkmark', () => (
    <Avatar
      size="large"
      avatarStyle="image"
      image={{ uri: 'https://picsum.photos/200' }}
      accessory="checkmark"
    />
  ))
