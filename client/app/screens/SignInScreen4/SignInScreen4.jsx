import React, {useEffect, useState, useRef} from 'react';
import {Input, KeyboardAvoidingView, SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import firebase from '../../config/firebase';
import Avatar from '../../components/Avatar/Avatar';
import Button from '../../components/Button/Button';
import { useStoreContext } from '../../utils/Context';
import styles from './styles';

const SignInScreen4 = ({ navigation, route }) => {
  const [state, changeState] = useState({})

  const submitForm = () => {};

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.wrapper}
      >        
          <Avatar size="large" avatarStyle="letter" letter="A" />
          <View style={styles.colorSelectionWrapper}>
            <View style={[styles.colorSelection, styles.grey]} />
            <View style={[styles.colorSelection, styles.tertiary]} />
            <View style={[styles.colorSelection, styles.error]} />
            <View style={[styles.colorSelection, styles.accent]} />
            <View style={[styles.colorSelection, styles.primary]} />
            <View style={[styles.colorSelection, styles.secondary]} />
          </View>
        <View style={styles.buttonPlacement}>
          <Button type='primary' size='fullWidth' iconPlacement='none' text='Create Profile' icon='person-add' handlePress={submitForm} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}


export default SignInScreen4;