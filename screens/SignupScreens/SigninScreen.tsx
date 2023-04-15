import { useEffect, useState } from 'react'
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
  Alert,
} from 'react-native'
import Button from '../../components/Button/Button'
import Sizes from '../../constants/Sizes'
import {NavigationProp, ParamListBase} from '@react-navigation/native'
import { Auth } from 'aws-amplify'

import styles from './styles'

type Props = {
  navigation: NavigationProp<ParamListBase>;
};


const SigninScreen = ({ navigation }: Props) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    isButtonEnabled: false,
    isLoggingIn: false
  })

  useEffect(() => {
    const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(state.email)
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(state.password)
    if (isEmailValid && isPasswordValid) {
      setState({
        ...state,
        isButtonEnabled: true
      })
    } else {
      setState({
        ...state,
        isButtonEnabled: false
      })
    }
  }, [state.email, state.password])

  const OnSigninPressed = async () => {
    try {
      setState({
        ...state,
        isLoggingIn: true
      })
      const response = await Auth.signIn(state.email, state.password)
      // const response = await Auth.signIn('garrettmroberts@gmail.com', 'Password1!')
      console.log(response)
      Keyboard.dismiss()
      setTimeout(() => {
        navigation.navigate('SignupScreen2')
      }, 10)
    } catch (e: any) {
      Alert.alert('ERROR: ',e.message)
    }
    setState({
      ...state,
      isLoggingIn: false
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
              <Text style={[styles.headerText, styles.bottomSpacer]}>Sign In</Text>
              <Text style={styles.label}>Email</Text>
              <View style={styles.textInputWrapper}>
                <TextInput
                  onChangeText={(input) => setState({
                    ...state,
                    email: input
                  })}
                  style={styles.input}
                />
              </View>
              <Text style={[styles.label, styles.topSpacer]}>Password</Text>
              <View style={styles.textInputWrapper}>
                <TextInput
                  onChangeText={(input) => {
                    setState({
                      ...state,
                      password: input
                    })
                  }}
                  placeholder="******"
                  secureTextEntry={true}
                  style={styles.input}
                />
              </View>
              <Text style={styles.helperText}>Password must be at least 8 characters long and contain a lowercase letter, uppercase letter, digit, and special character (@$!%*?&).</Text>
            </View>
            <View style={styles.viewPaddingSmall}>
              <Text style={styles.termsAndConditions}>
                By continuing you agree to Wegusta LLC’s <Text style={styles.bold}>Terms of Use</Text> and confirm
                that you have read Wegusta LLC’s <Text style={styles.bold}>Privacy Policy</Text>.
              </Text>
              <Button
                type={state.isButtonEnabled ? 'primary' : 'disabled'}
                size="fullWidth"
                text={state.isLoggingIn ? 'Logging in...' : 'Sign in'}
                handlePress={() => OnSigninPressed()}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default SigninScreen