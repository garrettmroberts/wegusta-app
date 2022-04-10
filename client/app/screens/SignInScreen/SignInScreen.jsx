import React, {useState, useRef} from 'react';
import {SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import firebase from '../../config/firebase';
import Button from '../../components/Button/Button';

const SignInScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const recaptchaVerifier = useRef(null);

  const verifyInput = () => {
    console.log(phoneNumber);
    return false;
  }

  const formatInput = () => {
    if (!phoneNumber.toString().includes('+')) {
      setPhoneNumber('+1' + phoneNumber)
    }
  }

  const sendVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then(setVerificationId);
  };

  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then((result) => {
        console.log(result);
        handlePress();
      });
  };

  const handlePress = () => {
    navigation.navigate('Home');
  };

  const renderButton = () => {
    const type = verifyInput ? 'primary' : 'disabled'
    return <Button type={type} size='fullWidth' iconPlacement='none' text='Send Verification' icon='person-add' handlePress={sendVerification}/>
  }

  const handleChangeText = e => {
    setPhoneNumber(e);
    e.length >= 10 ? setIsButtonEnabled(true) : setIsButtonEnabled(false);
  }

  return (
    <SafeAreaView>
      <TextInput
        placeholder="Phone Number"
        onChangeText={handleChangeText}
        keyboardType="phone-pad"
        autoCompleteType="tel"
      />
      <Button type={isButtonEnabled ? 'primary' : 'disabled'} size='fullWidth' iconPlacement='none' text='Send Verification' icon='person-add' handlePress={sendVerification}/>
      <TextInput
        placeholder="Confirmation Code"
        onChangeText={setCode}
        keyboardType="number-pad"
      />
      <TouchableOpacity onPress={confirmCode}>
        <Text>Send Verification</Text>
      </TouchableOpacity>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebase.app().options}
      />
    </SafeAreaView>
  );
}


export default SignInScreen;