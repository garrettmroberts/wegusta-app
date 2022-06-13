import React, { useEffect, useState, useRef } from 'react'
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import Toast from '../../components/Toast/Toast'
import {
  FirebaseRecaptchaVerifierModal
} from 'expo-firebase-recaptcha'
import firebase from '../../utils/firebase'
import Button from '../../components/Button/Button'
import { PropTypes } from 'prop-types'
import styles from './styles'


const SignInScreen1 = ({ navigation }) => {
  const [state, changeState] = useState({
    phoneNumber: '',
    code: '',
    verificationId: null,
    isButtonEnabled: false,
    isToastVisible: false,
  })


  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate('Home')
      }
    });
  }, [])

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
          iconLeft=''
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

SignInScreen1.propTypes = {
  navigation: PropTypes.object
}

export default SignInScreen1
