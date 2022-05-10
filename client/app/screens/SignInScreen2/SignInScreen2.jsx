import React, { useState } from 'react';
import {KeyboardAvoidingView, SafeAreaView, Text, TextInput, View} from 'react-native';
import { Toast } from '../../components';
import firebase from '../../config/firebase';
import Button from '../../components/Button/Button';
import { useStoreContext } from '../../utils/Context';
import styles from './styles';

const SignInScreen2 = ({ navigation, route }) => {
  const [state, changeState] = useState({
    code: '',
    isToastVisible: false,
  })

  const [context, dispatch] = useStoreContext();

  const handleToastClose = () => {
    changeState({
      ...state,
      isToastVisible: false
    })
  }

  const confirmCode = async () => {
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        route.params.verificationId,
        state.code
      );
      const result = await firebase
        .auth()
        .signInWithCredential(credential);
      dispatch({type: 'signIn', payLoad: result})
      navigation.navigate('SignIn3', { phoneNumber: route.params.phoneNumber});
    } catch(err) {
      console.log(err);
      
      changeState({
        ...state,
        isToastVisible: true
      });
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.wrapper}
      >
        <Toast description='The code you entered is incorrect. Try again.' style={state.isToastVisible ? styles.toast : styles.invisible} onPress={handleToastClose} />
        <View style={styles.inputBlockWrapper}>
          <Text style={styles.h2Reg}>Enter the code we just text you</Text>
          <TextInput
            placeholder="Confirmation Code"
            keyboardType="number-pad"
            onChangeText={res => {
              changeState({
                ...state,
                code: res
              })
            }}
            style={styles.input}
          />
          <Text style={styles.helperText}>Didn’t recive a code? <Text style={styles.bold}>Try Resending</Text></Text>
          <View style={styles.signinStage2ButtonPlacement}>
            <Button type='primary' size='fullWidth' iconPlacement='none' text='Continue' icon='person-add' handlePress={confirmCode}/>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}


export default SignInScreen2;