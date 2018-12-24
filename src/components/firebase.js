import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var config = {
    apiKey: "AIzaSyA9o5fWqieEGcJXVtluAAx7piSArAeIrfw",
    authDomain: "slack-clone-973e2.firebaseapp.com",
    databaseURL: "https://slack-clone-973e2.firebaseio.com",
    projectId: "slack-clone-973e2",
    storageBucket: "slack-clone-973e2.appspot.com",
    messagingSenderId: "128192848831"
};
firebase.initializeApp(config);

export default firebase;