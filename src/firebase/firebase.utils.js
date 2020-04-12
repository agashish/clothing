import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCO0SXozNl3H_uiYI4DYm1le7tXNsZtmeY",
    authDomain: "clothing-db-5d2a7.firebaseapp.com",
    databaseURL: "https://clothing-db-5d2a7.firebaseio.com",
    projectId: "clothing-db-5d2a7",
    storageBucket: "clothing-db-5d2a7.appspot.com",
    messagingSenderId: "1062543186716",
    appId: "1:1062543186716:web:f08ae432114ffa3f6238d9",
    measurementId: "G-6M3JHY9CFE"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: "select_account"})

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;