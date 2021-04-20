import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCAuoN5COsep1qHq0aonfKFkS84ENA_6xU",
    authDomain: "jeet-viramgama.firebaseapp.com",
    projectId: "jeet-viramgama",
    storageBucket: "jeet-viramgama.appspot.com",
    messagingSenderId: "1023604112930",
    appId: "1:1023604112930:web:63029c39314d58c4ff147b"
});

const db = firebaseApp.firestore();

export default db;