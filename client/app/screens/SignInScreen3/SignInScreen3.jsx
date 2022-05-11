import React, {useEffect, useState, useRef} from 'react';
import {Input, KeyboardAvoidingView, SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native';
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
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Name</Text>
            <TextInput  
              onChangeText={res => {
                changeState({
                  ...state,
                  name: res
                })
              }}
            style={styles.input}/>
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Phone</Text>
            <TextInput  
             keyboardType='phone-pad'
             value={state.phoneNumber}
              onChangeText={res => {
                changeState({
                  ...state,
                  phoneNumber: res
                })
              }}
            style={styles.input}/>
          </View>
          <View style={styles.buttonPlacement}>
            <Button type='primary' size='fullWidth' iconPlacement='none' text='Continue' icon='person-add' />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}


export default SignInScreen3;