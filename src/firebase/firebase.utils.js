import firebase from 'firebase/app'; 
//The reason we do /app is because we dont any library that we're not using.
//Then Import the library that you need below.

import 'firebase/firestore';
import 'firebase/auth';

//we always need the 'firebase/' import because we need access to the library

const config = {
    apiKey: "AIzaSyAaKKno1_D3k0H_Qow80RhVU7vvupoM7mg",
    authDomain: "crwn-db-5a2ea.firebaseapp.com",
    databaseURL: "https://crwn-db-5a2ea.firebaseio.com",
    projectId: "crwn-db-5a2ea",
    storageBucket: "crwn-db-5a2ea.appspot.com",
    messagingSenderId: "403092289869",
    appId: "1:403092289869:web:edc76d36800bfcdc5a9f04",
    measurementId: "G-S9GDF6R89D"
}; 

// Initialize Firebase
firebase.initializeApp(config);


export const auth = firebase.auth(); 
//We get the auth() from the import 'firebase/auth';
//We need to export this whenever we need to use the authentication

export const firestore = firebase.firestore();


//Sign in with goggle pop-up
const provider = new firebase.auth.GoogleAuthProvider(); //Access to the GoogleAuthProvider class from the auth library
provider.setCustomParameters({ prompt: 'select_account' }); //We want to trigger the google pop-up whenever we use Google Auth for aunthetication and sign in
export const signInWithGoggle = () => auth.signInWithPopup(provider); //the signInWithPopup function can take from many different provider like twitter, facebook, dll

//Last step, Still have to enable Google Auth on Firebase

export default firebase;