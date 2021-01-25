import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBLbs_-O1ZxkptTkXFutj93_GbPHw3UyOA",
    authDomain: "barter-app-3da1e.firebaseapp.com",
    projectId: "barter-app-3da1e",
    storageBucket: "barter-app-3da1e.appspot.com",
    messagingSenderId: "134696465067",
    appId: "1:134696465067:web:da6f1c11bc585a6d567dee"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();