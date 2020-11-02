import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDiUmY0GKXFWaxkoFPYTkHGTkM9W3AbP5I",
    authDomain: "fb-messenger-clone-c621d.firebaseapp.com",
    databaseURL: "https://fb-messenger-clone-c621d.firebaseio.com",
    projectId: "fb-messenger-clone-c621d",
    storageBucket: "fb-messenger-clone-c621d.appspot.com",
    messagingSenderId: "1009039522603",
    appId: "1:1009039522603:web:ae14d8b5f7ead0f0a1a36e",
    measurementId: "G-JHTEDS2KMG"
});

const db = firebaseApp.firestore();

export default db;