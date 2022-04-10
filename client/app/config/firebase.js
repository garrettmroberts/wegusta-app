import * as firebase from 'firebase';
import '@firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCUV3Zwd6QX2IYK9u2siFoOEfd8JsmafzQ",
  authDomain: "wegusta-app.firebaseapp.com",
  projectId: "wegusta-app",
  storageBucket: "wegusta-app.appspot.com",
  messagingSenderId: "196473153359",
  appId: "1:196473153359:web:bc6dcf990a28068528c73a",
  measurementId: "G-1DBKJGCQQD"
};

firebase.initializeApp(firebaseConfig);
export default firebase;