import React, { useEffect, useState, useRef } from 'react'
import {
  Input,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import firebase from '../../utils/firebase'
import Button from '../../components/Button/Button'
import { useStoreContext } from '../../utils/Context'
import styles from './styles'

const SignInScreen3 = ({ navigation, route }) => {
  const [state, changeState] = useState({
    name: '',
    phoneNumber: route.params.phoneNumber,
    submissionButtonStatus: 'disabled',
  })

  const [context, dispatch] = useStoreContext()

  const submitForm = () => {
    navigation.navigate('SignIn4')
  }

  useEffect(() => {
    if (
      state.name.length >= 5 &&
      state.phoneNumber.length >= 10 &&
      state.phoneNumber.length <= 12
    ) {
      changeState({
        ...state,
        submissionButtonStatus: 'primary',
      })
    } else {
      changeState({
        ...state,
        submissionButtonStatus: 'disabled',
      })
    }
  }, [state.name, state.phoneNumber])

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.wrapper}
      >
        <View style={styles.inputBlockWrapper}>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Name</Text>
            <TextInput
              onChangeText={res => {
                changeState({
                  ...state,
                  name: res,
                })
              }}
              style={styles.input}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Phone</Text>
            <TextInput
              keyboardType="phone-pad"
              value={state.phoneNumber}
              onChangeText={res => {
                changeState({
                  ...state,
                  phoneNumber: res,
                })
              }}
              style={styles.input}
            />
          </View>
          <View style={styles.buttonPlacement}>
            <Button
              type={state.submissionButtonStatus}
              size="fullWidth"
              iconPlacement="none"
              text="Continue"
              icon="person-add"
              handlePress={submitForm}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SignInScreen3
