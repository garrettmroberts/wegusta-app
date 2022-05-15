import React, {useEffect, useState, useRef} from 'react';
import {Input, KeyboardAvoidingView, Pressable, SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import firebase from '../../config/firebase';
import Avatar from '../../components/Avatar/Avatar';
import Button from '../../components/Button/Button';
import { useStoreContext } from '../../utils/Context';
import { colors } from '../../config';
import styles from './styles';

const SignInScreen4 = ({ navigation, route }) => {
  const [avatarColorState, setAvatarColorState] = useState(colors.grey)

  const submitForm = () => {};

  const handlePress = (color) => {
    setAvatarColorState(color);
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.wrapper}
      >        
          <Avatar size="large" avatarStyle="letter" letter="A" backgroundColor={avatarColorState.backgroundColor}/>
          <View style={styles.colorSelectionWrapper}>
            <Pressable onPress={() => {handlePress(styles.grey)}}>
              <View style={[styles.colorSelection, styles.grey]} />
            </Pressable>
            <Pressable onPress={() => {handlePress(styles.tertiary)}}>
              <View style={[styles.colorSelection, styles.tertiary]} />
            </Pressable>
            <Pressable onPress={() => {handlePress(styles.error)}}>
              <View style={[styles.colorSelection, styles.error]} />
            </Pressable>
            <Pressable onPress={() => {handlePress(styles.accent)}}>
              <View style={[styles.colorSelection, styles.accent]} />
            </Pressable>
            <Pressable onPress={() => {handlePress(styles.primary)}}>
              <View style={[styles.colorSelection, styles.primary]} />
            </Pressable>
            <Pressable onPress={() => {handlePress(styles.secondary)}}>
              <View style={[styles.colorSelection, styles.secondary]} />
            </Pressable>
          </View>
        <View style={styles.buttonPlacement}>
          <Button type='primary' size='fullWidth' iconPlacement='none' text='Create Profile' icon='person-add' handlePress={submitForm} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}


export default SignInScreen4;