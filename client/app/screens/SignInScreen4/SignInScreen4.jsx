import React, { useEffect, useState, useRef } from 'react'
import {
  Input,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import firebase from '../../utils/firebase'
import Avatar from '../../components/Avatar/Avatar'
import Button from '../../components/Button/Button'
import { useStoreContext } from '../../utils/Context'
import api from '../../utils/api'
import { colors } from '../../config'
import { PropTypes } from 'prop-types'
import styles from './styles'

const SignInScreen4 = ({ navigation, route }) => {
  const [avatarColorState, setAvatarColorState] = useState(colors.grey)

  const [context, dispatch] = useStoreContext()

  const submitForm = () => {
    const reqBody = {
      phoneNumber: route.params.phoneNumber,
      userId: route.params.userId,
      name: route.params.name,
      color: avatarColorState.backgroundColor
    }

    dispatch({ type: 'signIn', payload: reqBody })

    api.signUp(reqBody)
    navigation.navigate('Home')
  }

  const handlePress = color => {
    setAvatarColorState(color)
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.wrapper}>
        <Avatar
          size="large"
          avatarStyle="letter"
          letter={route.params.name[0]}
          backgroundColor={avatarColorState.backgroundColor}
        />
        <View style={styles.colorSelectionWrapper}>
          <Pressable
            onPress={() => {
              handlePress(styles.grey)
            }}
          >
            <View style={[styles.colorSelection, styles.grey]} />
          </Pressable>
          <Pressable
            onPress={() => {
              handlePress(styles.tertiary)
            }}
          >
            <View style={[styles.colorSelection, styles.tertiary]} />
          </Pressable>
          <Pressable
            onPress={() => {
              handlePress(styles.error)
            }}
          >
            <View style={[styles.colorSelection, styles.error]} />
          </Pressable>
          <Pressable
            onPress={() => {
              handlePress(styles.accent)
            }}
          >
            <View style={[styles.colorSelection, styles.accent]} />
          </Pressable>
          <Pressable
            onPress={() => {
              handlePress(styles.primary)
            }}
          >
            <View style={[styles.colorSelection, styles.primary]} />
          </Pressable>
          <Pressable
            onPress={() => {
              handlePress(styles.secondary)
            }}
          >
            <View style={[styles.colorSelection, styles.secondary]} />
          </Pressable>
        </View>
        <View style={styles.buttonPlacement}>
          <Button
            type="primary"
            size="fullWidth"
            iconPlacement="none"
            text="Create Profile"
            icon="person-add"
            handlePress={submitForm}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

SignInScreen4.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired
}

export default SignInScreen4
