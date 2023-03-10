import { useState } from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import {NavigationProp, ParamListBase} from '@react-navigation/native'

import Button from '../../components/Button/Button'
import Sizes from '../../constants/Sizes'
import styles from './styles'

type Props = {
  navigation: NavigationProp<ParamListBase>;
};


const SignupScreen3 = ({ navigation }: Props) => {
  const [state, changeState] = useState({
    code: '',
    verificationId: null,
    isButtonEnabled: false
  })

  const handleChangeText = (input: string) => {
    changeState({
      ...state,
      code: input,
      isButtonEnabled: input.length === 6,
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
              <Text style={styles.headerText}>Create Profile</Text>
            </View>
            <View style={styles.viewPadding}>
              <Text style={styles.label}>Enter code</Text>
              <View style={styles.textInputWrapper}>
                <TextInput
                  placeholder="******"
                  onChangeText={handleChangeText}
                  secureTextEntry={true}
                  keyboardType="number-pad"
                  style={styles.input}
                />
              </View>
              <Text style={styles.helperText}>
                Didn&apos;t receive a code? <Text style={styles.bold}>Resend code</Text>.
              </Text>
            </View>
            <View style={styles.viewPaddingSmall}>
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

export default SignupScreen3