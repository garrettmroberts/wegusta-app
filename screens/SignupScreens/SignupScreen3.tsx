import { useState } from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import {NavigationProp, ParamListBase} from '@react-navigation/native'
import Avatar from '../../components/Avatar/Avatar'
import Button from '../../components/Button/Button'
import Sizes from '../../constants/Sizes'
import Colors from '../../constants/Colors'
import styles from './styles'

type Props = {
  navigation: NavigationProp<ParamListBase>;
};


const SignupScreen3 = ({ navigation }: Props) => {
  const [state, changeState] = useState({
    code: '',
    verificationId: null,
    isButtonEnabled: false,
    Avatarletter: 'A',
    AvatarBackgroundColor: Colors.grey
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
          <>
            <View style={[styles.defaultFlex, styles.screenLayoutAlt, styles.viewPadding]}>
              <Text style={styles.headerText}>Create Profile</Text>
              <View>
                <Avatar size='large' avatarStyle='letter' letter={state.Avatarletter} backgroundColor={state.AvatarBackgroundColor} style={styles.avatarWrapper} />
                <View style={styles.textInputWrapperAlt}>
                  <Text style={styles.labelAlt}>Name</Text>
                  <TextInput
                    placeholder="Aaron Coleman"
                    onChangeText={handleChangeText}
                    style={styles.input}
                  />
                </View>
                <View style={styles.verticalSpacer} />
                <View style={styles.textInputWrapperAlt}>
                  <Text style={styles.labelAlt}>Phone</Text>
                  <TextInput
                    value="555.123.4567"
                    onChangeText={handleChangeText}
                    style={styles.input}
                    editable={false}
                    selectTextOnFocus={false}
                  />
                </View>
                <View style={styles.colorSelector}>
                  <Text style={styles.label}>Profile Color</Text>
                  <View style={styles.colorWrapper}>
                    <View style={[styles.colorBox, styles.greyLight]}/>
                    <View style={[styles.colorBox, styles.tertiary]}/>
                    <View style={[styles.colorBox, styles.error]}/>
                  </View>
                  <View style={styles.colorWrapper}>
                    <View style={[styles.colorBox, styles.accent]}/>
                    <View style={[styles.colorBox, styles.primary]}/>
                    <View style={[styles.colorBox, styles.secondary]}/>
                  </View>
                </View>
              </View>
            </View>
            <Button
              type={state.isButtonEnabled ? 'primary' : 'disabled'}
              size="fullWidth"
              text="Save changes"
              style={styles.fixedPositionBottomScreen}
            />
          </>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default SignupScreen3