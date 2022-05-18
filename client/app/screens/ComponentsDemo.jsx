/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View, FlatList, ScrollView, Text, StyleSheet } from 'react-native'
import { useStoreContext } from '../utils/Context'
import { colors, fonts } from '../config'
import { Feather, Ionicons } from '@expo/vector-icons'

import {
  SocialButton,
  IconButton,
  DecisionButton,
  OverlayButton,
  Toast,
} from '../components'
import Avatar from '../components/Avatar/Avatar'
import AvatarArray from '../components/AvatarArray/AvatarArray'
import Button from '../components/Button/Button'
import Checkbox from '../components/Checkbox/Checkbox'
import GroupNotification from '../components/GroupNotification/GroupNotification'
import InviteUserRow from '../components/InviteUserRow/InviteUserRow'
import LargeCard from '../components/LargeCard/LargeCard'
import SearchInput from '../components/SearchInput/SearchInput'
import Slider from '../components/Slider/Slider'
import Switch from '../components/Switch/Switch'

import buildIcon from '../utils/buildIcon'

import sampleUsers from '../temp/sampleUsers'

const handlePress = () => {
  console.log('pressed')
}
const HomeScreen = () => {
  const [state, dispatch] = useStoreContext()

  const addPersonIcon = <Ionicons name="person-add" size={24} color="white" />
  const addPersonIconSmall = (
    <Ionicons name="person-add" size={11} color="white" />
  )

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wide}>
          <Text style={styles.header}>Large Card</Text>
          <View style={styles.section}>
            <LargeCard
              image={require('../assets/burger.png')}
              title="Hop"
              description="Some example text is placed here to show what this component will look like fully built out."
              rating={3.5}
              distance="5 miles away"
              timeOpen="open till 9PM"
              cost="$$"
              onPress={handlePress}
            />
          </View>
        </View>

        <View style={styles.wide}>
          <Text style={styles.header}>Colors</Text>
          <View style={styles.section}>
            <View
              style={[styles.colorSquare, { backgroundColor: colors.primary }]}
            >
              <Text style={{ color: colors.white }}>primary</Text>
            </View>
            <View
              style={[styles.colorSquare, { backgroundColor: colors.greyDark }]}
            >
              <Text>greyDark</Text>
            </View>
            <View
              style={[styles.colorSquare, { backgroundColor: colors.grey }]}
            >
              <Text>grey</Text>
            </View>
            <View
              style={[
                styles.colorSquare,
                { backgroundColor: colors.greyLight },
              ]}
            >
              <Text>greyLight</Text>
            </View>
            <View
              style={[styles.colorSquare, { backgroundColor: colors.white }]}
            >
              <Text>white</Text>
            </View>
            <View
              style={[styles.colorSquare, { backgroundColor: colors.success }]}
            >
              <Text>success</Text>
            </View>
            <View
              style={[styles.colorSquare, { backgroundColor: colors.warning }]}
            >
              <Text>warning</Text>
            </View>
            <View
              style={[styles.colorSquare, { backgroundColor: colors.error }]}
            >
              <Text>error</Text>
            </View>
            <View
              style={[
                styles.colorSquare,
                { backgroundColor: colors.facebookBlue },
              ]}
            >
              <Text>facebookBlue</Text>
            </View>
          </View>
        </View>

        <View style={styles.wide}>
          <Text style={styles.header}>Fonts</Text>
          <View style={styles.section}>
            <Text style={fonts.displayBold}>Display Bold</Text>
            <Text style={fonts.h1Bold}>H1 Bold</Text>
            <Text style={fonts.h1Reg}>H1 Regular</Text>
            <Text style={fonts.h2Bold}>H2 Bold</Text>
            <Text style={fonts.h2Reg}>H2 Regular</Text>
            <Text style={fonts.bodyBold}>Body Bold</Text>
            <Text style={fonts.bodyReg}>Body Regular</Text>
            <Text style={fonts.buttonReg}>Button Regular</Text>
            <Text style={fonts.buttonSmall}>Button Small</Text>
            <Text style={fonts.inputLabel}>Inout Label</Text>
            <Text style={fonts.inputValue}>Input Value</Text>
            <Text style={fonts.metaBold}>Meta Bold</Text>
            <Text style={fonts.metaReg}>Meta Regular</Text>
          </View>
        </View>

        <View style={styles.wide}>
          <Text style={styles.header}>Icons</Text>
          <View style={styles.section}>
            {buildIcon({
              name: 'md-search',
              size: 24,
              color: colors.primary,
            })}
            {buildIcon({
              name: 'md-notifications-outline',
              size: 24,
              color: colors.primary,
            })}
            {buildIcon({
              name: 'fast-food',
              size: 24,
              color: colors.primary,
            })}
            {buildIcon({
              name: 'chevron-forward',
              size: 24,
              color: colors.primary,
            })}
            {buildIcon({
              name: 'chevron-back',
              size: 24,
              color: colors.primary,
            })}
            {buildIcon({
              name: 'checkbox',
              size: 24,
              color: colors.primary,
            })}
            {buildIcon({
              name: 'checkmark-circle',
              size: 24,
              color: colors.primary,
            })}
            {buildIcon({
              name: 'md-person-add',
              size: 24,
              color: colors.primary,
            })}
            {buildIcon({
              name: 'heart',
              size: 24,
              color: colors.primary,
            })}
            {buildIcon({
              name: 'close',
              size: 24,
              color: colors.primary,
            })}
            {buildIcon({
              name: 'md-refresh',
              size: 24,
              color: colors.primary,
            })}
            {buildIcon({
              name: 'star',
              size: 24,
              color: colors.primary,
            })}
            {buildIcon({
              name: 'star-half',
              size: 24,
              color: colors.primary,
            })}
          </View>
        </View>

        <View style={styles.wide}>
          <Text style={styles.header}>Buttons</Text>
          <View style={styles.section}>
            <Button
              type="primary"
              size="fullWidth"
              iconPlacement="left"
              text="Codename LLC"
              icon="person-add"
            />
            <Button
              type="primary"
              size="large"
              iconPlacement="right"
              text="Codename LLC"
              icon="person-add"
            />
            <Button
              type="primary"
              size="medium"
              iconPlacement="none"
              text="Codename LLC"
              icon="person-add"
            />
            <Button
              type="primary"
              size="small"
              iconPlacement="both"
              text="Codename LLC"
              icon="person-add"
            />
            <Button
              type="secondary"
              size="fullWidth"
              iconPlacement="left"
              text="Codename LLC"
              icon="person-add"
            />
            <Button
              type="secondary"
              size="large"
              iconPlacement="right"
              text="Codename LLC"
              icon="person-add"
            />
            <Button
              type="secondary"
              size="medium"
              iconPlacement="none"
              text="Codename LLC"
              icon="person-add"
            />
            <Button
              type="secondary"
              size="small"
              iconPlacement="both"
              text="Codename LLC"
              icon="person-add"
            />
            <Button
              type="tertiary"
              size="fullWidth"
              iconPlacement="left"
              text="Codename LLC"
              icon="person-add"
            />
            <Button
              type="tertiary"
              size="large"
              iconPlacement="right"
              text="Codename LLC"
              icon="person-add"
            />
            <Button
              type="tertiary"
              size="medium"
              iconPlacement="none"
              text="Codename LLC"
              icon="person-add"
            />
            <Button
              type="tertiary"
              size="small"
              iconPlacement="both"
              text="Codename LLC"
              icon="person-add"
            />
            <Button
              type="disabled"
              size="fullWidth"
              iconPlacement="left"
              text="Codename LLC"
              icon="person-add"
            />
            <Button
              type="disabled"
              size="large"
              iconPlacement="right"
              text="Codename LLC"
              icon="person-add"
            />
            <Button
              type="disabled"
              size="medium"
              iconPlacement="none"
              text="Codename LLC"
              icon="person-add"
            />
            <Button
              type="disabled"
              size="small"
              iconPlacement="both"
              text="Codename LLC"
              icon="person-add"
            />
            <Button
              type="destructive"
              size="fullWidth"
              iconPlacement="left"
              text="Codename LLC"
              icon="person-add"
            />
            <Button
              type="destructive"
              size="large"
              iconPlacement="right"
              text="Codename LLC"
              icon="person-add"
            />
            <Button
              type="destructive"
              size="medium"
              iconPlacement="none"
              text="Codename LLC"
              icon="person-add"
            />
            <Button
              type="destructive"
              size="small"
              iconPlacement="both"
              text="Codename LLC"
              icon="person-add"
            />
          </View>
        </View>

        <View style={styles.wide}>
          <Text style={styles.header}>Decision Buttons</Text>
          <View style={styles.section}>
            <DecisionButton decision="like" />
            <DecisionButton decision="dislike" />
          </View>
        </View>

        <View style={styles.wide}>
          <Text style={styles.header}>Social Buttons</Text>
          <View style={styles.section}>
            <SocialButton icon="facebook" handlePress={handlePress} />
            <SocialButton icon="google" handlePress={handlePress} />
            <SocialButton icon="apple" handlePress={handlePress} />
            <SocialButton icon="email" handlePress={handlePress} />
          </View>
        </View>

        <View style={styles.wide}>
          <Text style={styles.header}>Overlay Buttons</Text>
          <View style={styles.section}>
            <OverlayButton dark={true} overlay="more" />
            <OverlayButton dark={true} overlay="search" />
            <OverlayButton dark={true} overlay="close" />
            <OverlayButton overlay="more" />
            <OverlayButton overlay="search" />
            <OverlayButton overlay="close" />
          </View>
        </View>

        <View style={styles.wide}>
          <Text style={styles.header}>Search Buttons</Text>
          <View style={styles.section}>
            <SearchInput placeholder="Search" />
            <SearchInput placeholder="Search" disabled={true} />
          </View>
        </View>

        <View style={styles.wide}>
          <Text style={styles.header}>Icon Buttons</Text>
          <View style={styles.section}>
            <IconButton
              size="large"
              color="primary"
              icon="person-add"
              handlePress={handlePress}
            />
            <IconButton
              size="medium"
              color="primary"
              icon="person-add"
              handlePress={handlePress}
            />
            <IconButton
              size="small"
              color="primary"
              icon="person-add"
              handlePress={handlePress}
            />
            <IconButton
              size="xsmall"
              color="primary"
              icon="person-add"
              handlePress={handlePress}
            />
            <IconButton
              size="large"
              color="secondary"
              icon="person-add"
              handlePress={handlePress}
            />
            <IconButton
              size="medium"
              color="secondary"
              icon="person-add"
              handlePress={handlePress}
            />
            <IconButton
              size="small"
              color="secondary"
              icon="person-add"
              handlePress={handlePress}
            />
            <IconButton
              size="xsmall"
              color="secondary"
              icon="person-add"
              handlePress={handlePress}
            />
          </View>
        </View>

        <View style={styles.wide}>
          <Text style={styles.header}>Toast</Text>
          <View style={styles.section}>
            <Toast description="Description" iconLeft="md-person-add" />
          </View>
        </View>

        <View style={styles.wide}>
          <Text style={styles.header}>Avatars</Text>
          <View style={styles.section}>
            <Avatar size="large" />
            <Avatar size="medium" />
            <Avatar size="small" />
            <Avatar size="xsmall" />
            <Avatar size="large" accessory="checkmark" />
            <Avatar size="medium" accessory="checkmark" />
            <Avatar size="small" accessory="checkmark" />
            <Avatar size="large" avatarStyle="letter" letter="A" />
            <Avatar size="medium" avatarStyle="letter" letter="A" />
            <Avatar size="small" avatarStyle="letter" letter="A" />
            <Avatar size="xsmall" avatarStyle="letter" letter="A" />
            <Avatar
              size="large"
              avatarStyle="letter"
              letter="A"
              accessory="checkmark"
            />
            <Avatar
              size="medium"
              avatarStyle="letter"
              letter="A"
              accessory="checkmark"
            />
            <Avatar
              size="small"
              avatarStyle="letter"
              letter="A"
              accessory="checkmark"
            />
            <Avatar
              size="large"
              avatarStyle="image"
              image={{ uri: 'https://picsum.photos/200' }}
            />
            <Avatar
              size="medium"
              avatarStyle="image"
              image={{ uri: 'https://picsum.photos/200' }}
            />
            <Avatar
              size="small"
              avatarStyle="image"
              image={{ uri: 'https://picsum.photos/200' }}
            />
            <Avatar
              size="xsmall"
              avatarStyle="image"
              image={{ uri: 'https://picsum.photos/200' }}
            />
            <Avatar
              size="large"
              avatarStyle="image"
              image={{ uri: 'https://picsum.photos/200' }}
              accessory="checkmark"
            />
            <Avatar
              size="medium"
              avatarStyle="image"
              image={{ uri: 'https://picsum.photos/200' }}
              accessory="checkmark"
            />
            <Avatar
              size="small"
              avatarStyle="image"
              image={{ uri: 'https://picsum.photos/200' }}
              accessory="checkmark"
            />
          </View>
        </View>

        <View style={styles.wide}>
          <Text style={styles.header}>Group Notification</Text>
          <View style={styles.section}>
            <GroupNotification
              users={[
                {
                  image: { uri: 'https://picsum.photos/200' },
                  firstName: 'Aaronxxxxx',
                  lastName: 'Coleman',
                },
                {
                  letter: 'A',
                  firstName: 'Juliosss',
                  lastName: 'Alvares',
                },
                {
                  letter: 'J',
                  firstName: 'Juliosssssssssssssssss',
                  lastName: 'Alvares',
                },
              ]}
              unread={true}
              lastUpdated={new Date()}
            />
            <GroupNotification
              users={[
                {
                  image: { uri: 'https://picsum.photos/200' },
                  firstName: 'Aaron',
                  lastName: 'Coleman',
                },
                {
                  letter: 'A',
                  firstName: 'Julio',
                  lastName: 'Alvares',
                },
              ]}
              unread={false}
              lastUpdated={new Date()}
            />
            <GroupNotification
              users={[
                {
                  image: { uri: 'https://picsum.photos/200' },
                  firstName: 'Aaron',
                  lastName: 'Coleman',
                },
              ]}
              unread={true}
              lastUpdated={new Date()}
              handlePress={handlePress}
            />
          </View>
        </View>

        <View style={styles.wide}>
          <Text style={styles.header}>Switch</Text>
          <View style={styles.section}>
            <Switch />
            <Switch selected={true} />
            <Switch disabled={true} selected={true} />
          </View>
        </View>

        <View style={styles.wide}>
          <Text style={styles.header}>Checkbox</Text>
          <View style={styles.section}>
            <Checkbox currentState="unchecked" />
            <Checkbox currentState="partial" />
            <Checkbox currentState="checked" />
            <Checkbox currentState="disabled" />
          </View>
        </View>

        <View style={styles.wide}>
          <Text style={styles.header}>Invite User Rows</Text>
          <View style={styles.section}>
            <InviteUserRow
              name="Jimothy Airbender"
              isSelected={true}
              avatarStyles={{
                avatarStyle: 'letter',
                letter: 'J',
              }}
            />
            <InviteUserRow
              name="Jimothy Airbender"
              avatarStyles={{
                avatarStyle: 'letter',
                letter: 'J',
              }}
            />
          </View>
        </View>

        <View style={styles.wide}>
          <Text style={styles.header}>Avatar Array</Text>
          <View style={styles.section}>
            <AvatarArray avatars={sampleUsers.slice(0, 5)} />
            <AvatarArray avatars={sampleUsers} />
          </View>
        </View>

        <View style={styles.wide}>
          <Text style={styles.header}>Slider</Text>
          <View style={styles.section}>
            <Slider title={'distance'} units={'miles'} />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    color: colors.white,
    fontWeight: '700',
  },
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  // eslint-disable-next-line react-native/no-color-literals
  container: {
    flex: 1,
    backgroundColor: '#6546F9',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  colorSquare: {
    height: 70,
    width: 70,
    margin: 2,
  },
  wide: {
    width: '100%',
  },
})

export default HomeScreen
