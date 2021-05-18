import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyD6hIYSi-TgzMNOP5lZCipCPbiZwvu9kt0",
    authDomain: "photogram-app-aa06c.firebaseapp.com",
    projectId: "photogram-app-aa06c",
    storageBucket: "photogram-app-aa06c.appspot.com",
    messagingSenderId: "23508863992",
    appId: "1:23508863992:web:28f521b26bac9d693ba40d",
    measurementId: "G-HWXEH4XYF1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };