import React, { useState, useRef } from 'react'
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { Toast } from '../../components'
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from 'expo-firebase-recaptcha'
import firebase from '../../config/firebase'
import Button from '../../components/Button/Button'
import { useStoreContext } from '../../utils/Context'
import styles from './styles'

const SignInScreen1 = ({ navigation }) => {
  const [state, changeState] = useState({
    phoneNumber: '',
    code: '',
    verificationId: null,
    isButtonEnabled: false,
    isToastVisible: false,
  })

  const [context, dispatch] = useStoreContext()

  const recaptchaVerifier = useRef(null)

  const sendVerification = async () => {
    let formattedPhoneNumber = state.phoneNumber
    if (!state.phoneNumber.toString().includes('+')) {
      formattedPhoneNumber = '+1' + state.phoneNumber
    }

    try {
      const phoneProvider = new firebase.auth.PhoneAuthProvider()
      const verificationId = await phoneProvider.verifyPhoneNumber(
        formattedPhoneNumber,
        recaptchaVerifier.current
      )
      changeState({
        ...state,
        verificationId: verificationId,
        phoneNumber: formattedPhoneNumber,
      })
      navigation.navigate('SignIn2', {
        verificationId: verificationId,
        phoneNumber: formattedPhoneNumber,
      })
    } catch (err) {
      changeState({
        ...state,
        isToastVisible: true,
      })
    }
  }

  const handleToastClose = () => {
    changeState({
      ...state,
      isToastVisible: false,
    })
  }

  const handleChangeText = input => {
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
        <Toast
          description="Something went wrong.  Try again."
          style={state.isToastVisible ? styles.toast : styles.invisible}
          onPress={handleToastClose}
        />
        <View style={styles.inputBlockWrapper}>
          <Text style={styles.text}>Enter your phone # </Text>
          <View style={styles.textInputWrapper}>
            <Text style={styles.inputPrepend}>🇺🇸 +1</Text>
            <TextInput
              placeholder="555-123-4567"
              onChangeText={handleChangeText}
              keyboardType="phone-pad"
              autoCompleteType="tel"
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
              iconPlacement="none"
              text="Send Verification"
              icon="person-add"
              handlePress={sendVerification}
            />
          </View>
        </View>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebase.app().options}
          attemptInvisibleVerification={true}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SignInScreen1
