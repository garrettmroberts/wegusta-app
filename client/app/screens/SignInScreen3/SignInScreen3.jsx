import React, {useEffect, useState, useRef} from 'react';
import {KeyboardAvoidingView, SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import firebase from '../../config/firebase';
import Button from '../../components/Button/Button';
import { useStoreContext } from '../../utils/Context';
import styles from './styles';

const SignInScreen3 = ({ navigation, route }) => {
  const [state, changeState] = useState({
    name: '',
    phoneNumber: route.params.phoneNumber
  })

  const [context, dispatch] = useStoreContext();

  const handlePress = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.wrapper}
      >
        <View style={styles.inputBlockWrapper}>
          <TextInput
            placeholder='Name'
            onChangeText={res => {
              changeState({
                ...state,
                name: res
              })
            }}
            style={styles.input}
          />
           <TextInput
            placeholder='Phone Number'
            value={state.phoneNumber}
            keyboardType='phone-pad'
            onChangeText={res => {
              changeState({
                ...state,
                phoneNumber: res
              })
            }}
            style={styles.input}
          />
          <View style={styles.signinStage2ButtonPlacement}>
            <Button type='primary' size='fullWidth' iconPlacement='none' text='Continue' icon='person-add' />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}


export default SignInScreen3;