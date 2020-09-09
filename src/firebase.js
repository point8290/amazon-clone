
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJ7sSZTq0sM979GKghl98GdWL8Gd0x32w",
  authDomain: "clone-ba61e.firebaseapp.com",
  databaseURL: "https://clone-ba61e.firebaseio.com",
  projectId: "clone-ba61e",
  storageBucket: "clone-ba61e.appspot.com",
  messagingSenderId: "567642724196",
  appId: "1:567642724196:web:5916fca04c29f94b318c71",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
