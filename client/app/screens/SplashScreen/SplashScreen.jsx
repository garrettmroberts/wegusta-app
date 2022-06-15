import React, { useEffect } from 'react';
import {SafeAreaView, ImageBackground} from 'react-native';
import firebase from '../../utils/firebase'
import PropTypes from 'prop-types'
import styles from './styles';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
        navigation.replace('Home')
        return;
      } else {
        navigation.replace('SignIn1')
      }
    });
  }, [])

  return (
    <SafeAreaView style={styles.root}>
      <ImageBackground 
        source={require('../../assets/splash.png')}
        resizeMode="cover"
        style={styles.image}
       />
    </SafeAreaView>
  );
};

SplashScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default SplashScreen;