import React, {useState, useRef} from 'react';
import {SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import firebase from '../../config/firebase';
import Button from '../../components/Button/Button';
import { fonts } from '../../config';
import styles from './styles';

const SignInScreen = ({ navigation }) => {
  const [state, changeState] = useState({
    phoneNumber: '',
    code: '',
    verificationId: null,
    isButtonEnabled: false
  })

  const recaptchaVerifier = useRef(null);

  const sendVerification = () => {
    let formattedPhoneNumber = '';
    if (!state.phoneNumber.toString().includes('+')) {
      formattedPhoneNumber =  '+1' + state.phoneNumber
    }
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(formattedPhoneNumber, recaptchaVerifier.current)
      .then(res => {
        try {
          changeState({
            ...state,
            verificationId: res,
            phoneNumber: formattedPhoneNumber
          })
        } catch (err) {

        }
      });
  };

  // const confirmCode = () => {
  //   const credential = firebase.auth.PhoneAuthProvider.credential(
  //     state.verificationId,
  //     state.code
  //   );
  //   firebase
  //     .auth()
  //     .signInWithCredential(credential)
  //     .then((result) => {
  //       console.log(result);
  //       handlePress();
  //     });
  // };

  // const handlePress = () => {
  //   navigation.navigate('Home');
  // };

  const handleChangeText = input => {
    const isButtonEnabled =  input.length >= 10;
    changeState({
      ...state,
      phoneNumber: input,
      isButtonEnabled: isButtonEnabled
    })
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={fonts.h1Bold}>Enter your phone #</Text>
      <TextInput
        placeholder="Phone Number"
        onChangeText={handleChangeText}
        keyboardType="phone-pad"
        autoCompleteType="tel"
        style={styles.input}
      />
      <Button type={state.isButtonEnabled ? 'primary' : 'disabled'} size='fullWidth' iconPlacement='none' text='Send Verification' icon='person-add' handlePress={sendVerification}/>
      {/* <TextInput
        placeholder="Confirmation Code"
        onChangeText={res => {
          changeState({
            ...state,
            code: res
          })
        }}
        keyboardType="number-pad"
      />
      <TouchableOpacity onPress={confirmCode}>
        <Text>Send Verification</Text>
      </TouchableOpacity> */}
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebase.app().options}
      />
    </SafeAreaView>
  );
}


export default SignInScreen;