import React, { useEffect } from 'react';
import {SafeAreaView, ImageBackground} from 'react-native';
import { useStoreContext } from '../../utils/Context'
import firebase from '../../utils/firebase'
import PropTypes from 'prop-types'
import styles from './styles';
import api from '../../utils/api';

const SplashScreen = ({ navigation }) => {
  const [context, dispatch] = useStoreContext()

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        api.getUser(user.uid).then((res) => {
          dispatch({ type: 'signIn', payload: res.data || {} })
        })
        navigation.replace('Home')
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