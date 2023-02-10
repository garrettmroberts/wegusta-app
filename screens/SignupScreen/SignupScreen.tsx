import React, { useState } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native'
import Button from '../../components/Button/Button'

import styles from './styles'


const SignupScreen = () => {
  const [state, changeState] = useState({
    phoneNumber: '',
    code: '',
    verificationId: null,
    isButtonEnabled: false,
    isToastVisible: false,
  })

  const handleChangeText = (input: string) => {
    const isButtonEnabled = input.length >= 10
    changeState({
      ...state,
      phoneNumber: input,
      isButtonEnabled: isButtonEnabled,
    })
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.wrapper}
      >
        <View style={styles.inputBlockWrapper}>
          <Text style={styles.text}>Enter your phone # </Text>
          <View style={styles.textInputWrapper}>
            <Text style={styles.inputPrepend}>🇺🇸 +1</Text>
            <TextInput
              placeholder="555-123-4567"
              onChangeText={handleChangeText}
              keyboardType="phone-pad"
              style={styles.input}
            />
          </View>
          <View>
            <Text style={styles.termsAndConditions}>
              By continuing you agree to Wegusta LLC’s Terms of Use and confirm
              that you have read Wegusta LLC’s Privacy Policy.
            </Text>
            <Button
              type={state.isButtonEnabled ? 'primary' : 'disabled'}
              size="fullWidth"
              text="Send Verification"
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SignupScreen