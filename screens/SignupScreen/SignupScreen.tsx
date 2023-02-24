import { useEffect, useState, useRef } from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import Button from '../../components/Button/Button'
import Sizes from '../../constants/Sizes'

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
    if (input.length === 3 && state.phoneNumber.split('').length < 3 ) {
      input = input + ' '
    }
    const isButtonEnabled = input.length === 11
    changeState({
      ...state,
      phoneNumber: input,
      isButtonEnabled: isButtonEnabled,
    })
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.defaultFlex, styles.whiteBackground]}
      keyboardVerticalOffset={Sizes.headerHeight + 40}
    >
      <SafeAreaView style={styles.defaultFlex}>
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
          <View style={[styles.defaultFlex, styles.screenLayout]}>
            <View style={styles.headerTextWrap}>
              <Text style={styles.headerText}>Welcome to</Text>
              <Image source={require('../../assets/images/wegusta-text.png')} style={styles.wegustaTextImage}/>
            </View>
            <View style={styles.viewPadding}>
              <Text style={styles.label}>Enter phone to get started</Text>
              <View style={styles.textInputWrapper}>
                <Text>🇺🇸 +1</Text>
                <TextInput
                  placeholder="555 1234567"
                  onChangeText={handleChangeText}
                  keyboardType="phone-pad"
                  style={styles.input}
                  value={state.phoneNumber}
                />
              </View>
            </View>
            <View style={styles.viewPaddingSmall}>
              <Text style={styles.termsAndConditions}>
                By continuing you agree to Wegusta LLC’s <Text style={styles.bold}>Terms of Use</Text> and confirm
                that you have read Wegusta LLC’s <Text style={styles.bold}>Privacy Policy</Text>.
              </Text>
              <Button
                type={state.isButtonEnabled ? 'primary' : 'disabled'}
                size="fullWidth"
                text="Continue"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default SignupScreen