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


const SignupScreen3 = ({ navigation: any }: Props) => {
  const [state, changeState] = useState({
    code: '',
    isSubmitEnabled: false,
    name: '',
    avatarletter: 'A',
    avatarBackgroundColor: Colors.grey
  })

  const handleNameChange = (input: string) => {
    changeState({
      ...state,
      name: input,
      avatarletter: input.length > 0 ? input[0].toUpperCase() : 'A',
      isSubmitEnabled: input.length > 0
    })
  }

  const changeColor = (color: any) => {
    changeState({
      ...state,
      avatarBackgroundColor: color 
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
                <Avatar size='large' avatarStyle='letter' letter={state.avatarletter} backgroundColor={state.avatarBackgroundColor} style={styles.avatarWrapper} />
                <View style={styles.textInputWrapperAlt}>
                  <Text style={styles.labelAlt}>Name</Text>
                  <TextInput
                    placeholder="Aaron Coleman"
                    onChangeText={handleNameChange}
                    style={styles.input}
                  />
                </View>
                <View style={styles.verticalSpacer} />
                <View style={styles.textInputWrapperAlt}>
                  <Text style={styles.labelAlt}>Phone</Text>
                  <TextInput
                    value="555.123.4567"
                    style={styles.input}
                    editable={false}
                    selectTextOnFocus={false}
                  />
                </View>
                <View style={styles.colorSelector}>
                  <Text style={styles.label}>Profile Color</Text>
                  <View style={styles.colorWrapper}>
                    <Pressable style={styles.colorBoxWrapper} onPress={() => changeColor(Colors.greyLight)}>
                      <View style={[styles.colorBox, styles.greyLight]}/>
                    </Pressable>
                    <Pressable style={styles.colorBoxWrapper} onPress={() => changeColor(Colors.tertiary)}>
                      <View style={[styles.colorBox, styles.tertiary]}/>
                    </Pressable>
                    <Pressable style={styles.colorBoxWrapper} onPress={() => changeColor(Colors.error)}>
                      <View style={[styles.colorBox, styles.error]}/>
                    </Pressable>
                  </View>
                  <View style={styles.colorWrapper}>
                    <Pressable style={styles.colorBoxWrapper} onPress={() => changeColor(Colors.accent)}>
                      <View style={[styles.colorBox, styles.accent]}/>
                    </Pressable>
                    <Pressable style={styles.colorBoxWrapper} onPress={() => changeColor(Colors.primary)}>
                      <View style={[styles.colorBox, styles.primary]}/>
                    </Pressable>
                    <Pressable style={styles.colorBoxWrapper} onPress={() => changeColor(Colors.secondary)}>
                      <View style={[styles.colorBox, styles.secondary]}/>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
            <Button
              type={state.isSubmitEnabled ? 'primary' : 'disabled'}
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