import firebase from 'firebase'
require('firebase/auth')
require ('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyAaB9fh34sfbAFNWsPT-27rRRN5aLk3W-I",
    authDomain: "barter-system-d2988.firebaseapp.com",
    projectId: "barter-system-d2988",
    storageBucket: "barter-system-d2988.appspot.com",
    messagingSenderId: "1060797710557",
    appId: "1:1060797710557:web:a2964482f9565b2ad51b34",
    measurementId: "G-VKRH14F18Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()