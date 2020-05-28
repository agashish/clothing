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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get();

    if(!snapshot.exists) {
      
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(errorTransformed) {
        console.log('Error in user creating', errorTransformed)        
      }
    }

  return userRef;
  }

  export const convertCollectionsToMap = (collections) => {
    const transformedCollection = collections.docs.map(collection => {
      const {title, items} = collection.data();
      return {
        id: collection.id,
        items,
        title,
        routeName: encodeURI(title.toLowerCase()),
      }      
    })

    return transformedCollection.reduce((accumulate, collection) => {      
      accumulate[collection.title.toLowerCase()] = collection;
      return accumulate;
    }, {});
  }

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: "select_account"})

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase; 