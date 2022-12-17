// import { initializeApp } from 'firebase/app';
// import { getStorage } from 'firebase/storage';
// import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';
import Constants from 'expo-constants';

export default {
  apiKey: Constants.expoConfig?.extra?.apiKey,
  authDomain: Constants.expoConfig?.extra?.authDomain,
  projectId: Constants.expoConfig?.extra?.projectId,
  storageBucket: Constants.expoConfig?.extra?.storageBucket,
  messagingSenderId: Constants.expoConfig?.extra?.messagingSenderId,
  appId: Constants.expoConfig?.extra?.appId,
  measurementId: Constants.expoConfig?.extra?.measurementId
};

// const storage = getStorage();
// const auth = getAuth();
// const firestore = getFirestore();

// export { storage, auth, firestore };
