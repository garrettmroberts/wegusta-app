import React, {useState, useRef} from 'react';
import {SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { Toast } from '../../components';
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
import firebase from '../../config/firebase';
import Button from '../../components/Button/Button';
import { useStoreContext } from '../../utils/Context';
import { fonts } from '../../config';
import styles from './styles';

const SignInScreen = ({ navigation }) => {
  const [state, changeState] = useState({
    phoneNumber: '',
    code: '',
    verificationId: null,
    isButtonEnabled: false,
    isToastVisible: false
  })

  const [context, dispatch] = useStoreContext();

  const recaptchaVerifier = useRef(null);

  const sendVerification = async () => {
    let formattedPhoneNumber = '';
    if (!state.phoneNumber.toString().includes('+')) {
      formattedPhoneNumber =  '+1' + state.phoneNumber
    }

    try {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      const verificationId = await phoneProvider.verifyPhoneNumber(formattedPhoneNumber, recaptchaVerifier.current)
      changeState({
        ...state,
        verificationId: verificationId,
        phoneNumber: formattedPhoneNumber
      })
      dispatch({type: 'saveVerificationId', payload: verificationId});
    } catch (err) {
      changeState({
        ...state,
        isToastVisible: true
      })
      console.log('ERROR', state);
    }
  };

  const handleToastClose = () => {
    changeState({
      ...state,
      isToastVisible: false
    })
  }

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
    const isButtonEnabled = input.length >= 10;
    changeState({
      ...state,
      phoneNumber: input,
      isButtonEnabled: isButtonEnabled
    })
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <Toast description='Something went wrong.  Try again.' style={state.isToastVisible ? styles.toast : styles.toastInvisible} onPress={handleToastClose} />
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
        attemptInvisibleVerification={true}
      />
    </SafeAreaView>
  );
}


export default SignInScreen;