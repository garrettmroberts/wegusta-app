/* eslint-disable react-native/no-raw-text */
import React, { useState } from 'react'
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native'
import Toast from '../../components/Toast/Toast'
import firebase from '../../utils/firebase'
import Button from '../../components/Button/Button'
// import { useStoreContext } from '../../utils/Context'
import { PropTypes } from 'prop-types'
import styles from './styles'

const SignInScreen2 = ({ navigation, route }) => {
  const [state, changeState] = useState({
    code: '',
    isToastVisible: false,
  })

  // const [context, dispatch] = useStoreContext()

  const handleToastClose = () => {
    changeState({
      ...state,
      isToastVisible: false,
    })
  }

  const confirmCode = async () => {
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        route.params.verificationId,
        state.code
      )
      const result = await firebase.auth().signInWithCredential(credential)
      // dispatch({ type: 'signIn', payLoad: result })
      navigation.navigate('SignIn3', {
        phoneNumber: result.user.phoneNumber,
        userId: result.user.uid
      })
    } catch (err) {
      changeState({
        ...state,
        isToastVisible: true,
      })
    }
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.wrapper}
      >
        <Toast
          description="The code you entered is incorrect. Try again."
          style={state.isToastVisible ? styles.toast : styles.invisible}
          onPress={handleToastClose}
          iconLeft=''
        />
        <View style={styles.inputBlockWrapper}>
          <Text style={styles.h2Reg}>Enter the code we just text you</Text>
          <TextInput
            placeholder="Confirmation Code"
            keyboardType="number-pad"
            onChangeText={res => {
              changeState({
                ...state,
                code: res,
              })
            }}
            style={styles.input}
          />
          <Text style={styles.helperText}>
            Didn’t recive a code? <Text style={styles.bold}>Try Resending</Text>
          </Text>
          <View style={styles.signinStage2ButtonPlacement}>
            <Button
              type="primary"
              size="fullWidth"
              iconPlacement="none"
              text="Continue"
              icon="person-add"
              handlePress={confirmCode}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

SignInScreen2.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired
}

export default SignInScreen2
